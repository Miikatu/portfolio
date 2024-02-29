import Image from "next/image"
export default function ImageFrame(props) {
  //"/../../assets/pictures/blueprint_blue.png"
  return (

    <div id="frame" className="hover:animate-pulse pt-5 pb-2 text-md md:text-lg mx-5">
      <Image
        src={props.path}
        className=" "
        width={500}
        height={500}
      />
    </div>
  )
}
