import Image from "next/image";
export default function ImageFrame(props: any) {
  //"/../../assets/pictures/blueprint_blue.png"
  return (
    <div
      id="frame"
      className="borde border-black  hover:brightness-100 hover:grayscale-0  pt-5 pb-2 text-md md:text-lg mx-5"
    >
      <Image
        alt="alt"
        src={props.path}
        className="rounded-md"
        width={500}
        height={500}
      />
    </div>
  );
}
