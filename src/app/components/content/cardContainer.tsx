import ImageFrame from "../basics/imageFrame";
import ItemDescription from "./itemDescription";
import ItemCard from "./itemCard";
import type { Card, Component } from "@/types";
import theme from "./styles.module.css";

export default function cardContainer(props: { cards: Card[] }) {
  //console.log("CARDS: ", cards.items[0].thumbnail);
  const cards = props.cards;
  console.log(cards);
  const listItems = cards.map((card, i: Number) => {
    return <ItemCard className="" title={card.title} path={card.url} />;
  });
  return (
    <>
      <div
        className={`overflow-auto bg-[#2b2e3a] rounded-3xl md:mx-16 mx-5 justify-center flex flex-wrap gap-4 pb-24`}
      >
        {listItems}
      </div>

      <div className=" hidden">
        <svg
          className="fill-slate-800"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
}
