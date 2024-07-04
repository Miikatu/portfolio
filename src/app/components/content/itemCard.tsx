import ImageFrame from "../basics/imageFrame";
import ItemDescription from "./itemDescription";
export default function itemCard(props: any) {
  return (
    <div className="flex hover:outline-4 hover:outline outline-4 outline-blue-800 flex-col items-center w-fit mt-14 pb-12  bg-gray-100 rounded-3xl border-black">
      <ImageFrame path={props.path} />
      <ItemDescription title={props.title} content="" />
    </div>
  );
}
