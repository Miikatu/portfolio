import "../globals.css";
import Navbar from "./navigation/Navbar";
import Footer from "./navigation/footer";
import Welcome from "./content/welcome";
import Skills from "./content/skills";
import CardContainer from "./content/cardContainer";

import { getLayout } from "@/sanity/client";
import { getContent } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

import type { Layout, Component, Footer as FooterType } from "@/types";

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

const STYLE_QUERY = `
*[_type=="style"]{
  theme
}
`;

//const skills = [programming, frontEnd, database, software];
export default async function Layout({ children }) {
  const layout = await sanityFetch<Layout[]>({ query: CONTENT_QUERY });
  const style = await sanityFetch<SanityDocument[]>({ query: STYLE_QUERY });
  const components = await sanityFetch<Component[]>({
    query: COMPONENT_QUERY,
  });

  const { navbar, hero, footer } = layout[0];
  const { theme } = style[0];
  const { skills, cards } = components[0];
  /*
            <Welcome {...hero} />
            <Skills skills={skills} />
            <CardContainer cards={cards} />*/
  return (
    <html className={`scroll-smooth bg-[#f0f1fa] font-mono`} lang="en">
      <body>
        <div>
          <div>
            <Navbar {...navbar} />
            <main>{children}</main>
            <Footer footer={footer} theme={theme} />
          </div>
        </div>
      </body>
    </html>
  );
}

<style lang="postcss"></style>;
