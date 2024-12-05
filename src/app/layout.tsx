import "./globals.css";
import Navbar from "./components/navigation/navbar";
import Footer from "./components/navigation/footer";
import Welcome from "./components/content/welcome";
import Skills from "./components/content/skills";
import CardContainer from "./components/content/cardContainer";
import { SanityDocument } from "next-sanity";
import { getComponent, getLayout, getStyle } from "../sanity/client";
import client from "@sanity/client";

import type { Layout, Component, Footer as FooterType } from "@/types";
export const metadata = {
  // METATAG API
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata
  title: "Miikatti.js",
};

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

const programming = ["Java", "Python", "C++", "C"];
const frontEnd = ["React", "Vue", "Tailwind"];
const database = ["SQL", "MySQL", "MongoDB"];
const software = ["Power Bi", "Microsoft 365", "LibreOffice"];

//const skills = [programming, frontEnd, database, software];

export default async function RootLayout() {
  const layout = await getLayout();
  const style = await getStyle();
  const components = await getComponent();
  
  const { navbar, hero, footer } = layout[0];
  const { theme } = style[0];
  const { skills, cards } = components[0];

  return (
    <html className={`scroll-smooth bg-[#f0f1fa] font-mono`} lang="en">
      <body>
        <div>
          <div>
            <Navbar {...navbar} />
            <Welcome {...hero} />
            <Skills skills={skills} />
            <CardContainer cards={cards} />
            <Footer footer={footer} theme={theme} />
          </div>
        </div>
      </body>
    </html>
  );
}

<style lang="postcss"></style>;
