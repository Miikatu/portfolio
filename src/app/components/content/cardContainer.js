import ImageFrame from "../basics/imageFrame"
import ItemDescription from "./itemDescription"
import ItemCard from "./itemCard";
export default function cardContainer(props) {
    const items = ["Weather App", "TaskiMatti", "Grid Snake", "Serveriry.fi"];
    const path=[
        "assets/pictures/WeatherAppCardLogo.png",
        "assets/pictures/TaskiMatti.png",
        "assets/pictures/GridSnakeCard.png",
        "assets/pictures/ServeriRyCard.png"
    ]
    const listItems = items.map((item, i) => {
        return(
            <ItemCard className="text-black" title={item} path={path[i]}/>
        )
    });

    return (
        <div className="justify-center bg-white flex flex-wrap gap-4">
            {listItems}
        </div>
    )
}
