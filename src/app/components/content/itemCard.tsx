import ImageFrame from "../basics/imageFrame";
import ItemDescription from "./itemDescription";
import type { Card } from "@/types";
export default function itemCard(props: {
  path: string;
  title: string;
  update: string;
}) {
  return (
    <div className="flex shadow-inner md:hover:animate-shine hover:outline-4 hover:outline  flex-col w-fit mt-14 pb-12 bg-[#faf9f6] rounded-3xl ">
      <div className="relative z-0">
        <ImageFrame path={props.path} />
        <ItemDescription title={props.title} content="" />
      </div>
    </div>
  );
}
