import CardContainer from "@/components/content/cardContainer";
import Skills from "@/components/content/skills";
import Welcome from "@/components/content/welcome";
import Image from "next/image";
import { SanityDocument, createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // `false` if you want to bypass the edge cache
  apiVersion: process.env.SANITY_API_VERSION, // use a current date to target the latest API version
});
const CONTENT_QUERY = `  
*[_type=="layout"]{
  navbar,
  hero,
  footer{
    contactBar{
      contactList[]{
        contactIcon{
          "url": asset->url
        },
        contactLink,
        contactBackground,
        contactTextColor
      },
    },
    seperator{
      "url": asset->url
    }
  }
}
`;
const COMPONENT_QUERY = `  
*[_type=="component"]{
  skills,
  cards[]{
    title,
    "url": thumbnail.asset->url
  }
}
`;

export default async function Home() {
  const layout = await sanityClient.fetch(CONTENT_QUERY);
  const components = await sanityClient.fetch(COMPONENT_QUERY);
  const { navbar, hero, footer } = layout[0];
  const { skills, cards } = components[0];

  return (
    <div>
      <Welcome {...hero} />
      <Skills skills={skills} />
      <CardContainer cards={cards} />
    </div>
  );
}