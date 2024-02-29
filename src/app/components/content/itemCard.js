import ImageFrame from "../basics/imageFrame"
import ItemDescription from "./itemDescription"
export default function itemCard(props) {
    return (
        <div className=" flex flex-col items-center w-fit mt-14 pb-12 shadow-md shadow-black bg-white rounded-lg border-black">
            <ImageFrame path={props.path} />
            <ItemDescription title={props.title} content="Tämä on projectin kuvaus" />
        </div>
    )
}