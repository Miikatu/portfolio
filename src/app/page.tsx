import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { getCount } from "@/sanity/client";
import { getAll } from "@/sanity/client";

const EVENTS_QUERY = `*[_type=="layout"]{ navbar  {    links,    Title  },  hero}`;

async function fetchData() {
  try {
    const data = await sanityFetch<SanityDocument[]>({ query: EVENTS_QUERY });
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

export default async function IndexPage() {
  const events: any = await getCount();
  const allEvents: any = await getAll();
  return (
    <main className="text-black flex bg-gray-100 flex-col p-24 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">Data from Sanity</h1>
      <p>{events[0].navbar.title}</p>
    </main>
  );
}
