import ImageFrame from "../basics/imageFrame"
import ItemDescription from "./itemDescription"
import ItemCard from "./itemCard";
export default function cardContainer(props) {
    const items = ["Weather App", "TaskiMatti", "Grid Snake", "Serveriry.fi"];
    const path=[
        "assets/pictures/TaskiMatti.png",
        "assets/pictures/TaskiMatti.png",
        "assets/pictures/GridSnakeCard.png",
        "assets/pictures/ServeriRyCard.png"
    ]
    const listItems = items.map((item, i) => {
        return(
            <ItemCard className="" title={item} path={path[i]}/>
        )
    });

    return (
        <div className="justify-center bg-white  pb-12 flex flex-wrap gap-4">
            {listItems}
        </div>
    )
}
