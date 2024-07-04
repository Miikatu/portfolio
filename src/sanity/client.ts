import { createClient, type ClientConfig } from "@sanity/client";
import { type QueryParams } from "next-sanity";
export const client = createClient({
  projectId: "qrx5zve1",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export async function getCount() {
  try {
    const count = await client.fetch(`
      *[_type=="layout"]{
        navbar,
        hero
    }
    `);
    //console.log("Count of documents:", count);
    return count;
  } catch (error) {
    console.log("Error ", error);
    return 1;
  }
}

export async function getLayout() {
  const layout = await client.fetch(`
    *[_type=="layout"]{
      navbar,
      hero
    }
  `);
  return layout[0];
}

export async function getContent() {
  const layout = await client.fetch(`
    *[_type=="layout"]{
      navbar,
      hero
    }
  `);
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
