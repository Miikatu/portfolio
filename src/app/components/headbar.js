import Headline from './basics/headline'
import ImageFrame from './basics/imageFrame'
import ItemCard from './content/itemCard'

// src/app/assets/pictures/blueprint_still.jpeg
export default function Headbar() {
    return (
      <div className="px-10 ">
        <div className="bg-black relative rounded ">
          <div className="text-center text-black mt-5 rounded -translate-x-4 -translate-y-4 bg-white">
            <ItemCard />
          </div>
        </div>
      </div>
    )
  }
  