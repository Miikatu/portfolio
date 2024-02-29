import Banner from  "./basics/banner"
export default function ContentBox() {
  return (
    <div id="cards" className="p-10 h-full">
      <div className="bg-black  relative rounded ">
        <div id="box-violet" className=" grid grid-cols-4 pl-10 pt-5 pb-20 space-y-10 space-x-2 rounded -translate-x-4 -translate-y-4 bg-white">
          <h1 className="font-bold col-span-5 text-xl">Skills & Hobbies</h1>
          <div className="col-start-1">Programming</div>
          <Banner className="" banner={"../../assets/pictures/banner1"}/>
          <div className="col-start-3 sm:col-start-4 w-fit bg-red-500 rounded px-2">Link</div>
          <div className="col-start-1">Gamedev</div>
          <Banner className="" banner={"../../assets/pictures/banner2.jpeg"}/>
          <div className="col-start-3 sm:col-start-4 w-fit bg-red-500 rounded px-2">Link</div>
          <div className="col-start-1">Graphics</div>
          <Banner className="" banner={"../../assets/pictures/banner3.jpeg"}/>
          <div className="col-start-3 sm:col-start-4 w-fit bg-red-500 rounded px-2">Link</div>
          <div className="col-start-1">Boardgames</div>
          <Banner className="" banner={"../../assets/pictures/banner3.jpeg"}/>
          <div className="col-start-3 sm:col-start-4 w-fit bg-red-500 rounded px-2">Link</div>
        </div>
      </div>
    </div>
  )
}
