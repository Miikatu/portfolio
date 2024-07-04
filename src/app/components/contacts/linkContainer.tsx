import Image from "next/image";

// import themecss from './links.module.css'
import type { Footer } from "@/types";
export default function linkContainer(footer: Footer) {
  const listItems = footer.contactBar.contactList.map((item, i) => {
    const style = {
      background: `rgb(${item.contactBackground.rgb.r}, ${item.contactBackground.rgb.g}, ${item.contactBackground.rgb.b})`,
      color: `rgb(${item.contactTextColor.rgb.r},${item.contactTextColor.rgb.g},${item.contactTextColor.rgb.b})`,
    };

    return (
      <>
        <div className="flex flex-wrap">
          <a href={`${item.contactLink.href}`}>
            <div
              className={`flex flex-wrap rounded-3xl transition-all hover:scale-125 shadow-lg px-6 py-5 pt-6 text-3xl my-24 font-bold`}
              style={style}
            >
              {item.contactLink.text}
              <Image
                alt="image"
                className={`ml-2 h-12 w-12`}
                src={`${item.contactIcon.url}`}
                width={500}
                height={500}
              />
            </div>
          </a>
        </div>
      </>
    );
  });
  return <>{listItems}</>;
}
