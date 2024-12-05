import { WishItem } from "@/types"
import { createClient, SanityDocument, type ClientConfig } from "@sanity/client";
import { type QueryParams } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ,
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "vX", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export async function getComponent() {
  try {
    const COMPONENT_QUERY = `  
    *[_type=="component"]{
      skills,
      cards[]{
        title,
        "url": thumbnail.asset->url
      }
    }
    `;
    return await client.fetch(COMPONENT_QUERY);
  } catch (error) {
    console.log("Error ", error);
    return 1;
  }
}

export async function getLayout() {
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
  const layout = await client.fetch(CONTENT_QUERY);
  return layout;
}

export async function getStyle() {
  const STYLE_QUERY = `
*[_type=="style"]{
  theme
}
`;
const style = await client.fetch(STYLE_QUERY);
return style;
}

export async function getAll() {
  try {
    const all = await client.fetch("*[]");
    //console.log(":", all);
    return all;
  } catch (error) {
    console.log("Error ", error);
    return 1;
  }
}
export async function getWishList() {
  const WISHLIST_QUERY = `  
  *[_type == "wishItem"]{
  _id,
  name,
  description,
  "imageUrl": image.asset->url,
  productLink
}
  `;

  const data = await sanityFetch<WishItem[]>({ query: WISHLIST_QUERY });
  console.log("Fetched Data: ", data);
  return data;
}

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params);
}
