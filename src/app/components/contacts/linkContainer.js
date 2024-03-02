import Image from "next/image";
export default function linkContainer() {


    const socials = ["Github", "Codeberg", "LinkedIn"];
    const links = ["https://github.com/Miikatu", "https://codeberg.org/Miikatti/", "https://www.linkedin.com/in/miika-turja-6703152b0/"]
    const image =
        ["assets/pictures/github-mark.svg",
            "assets/pictures/codeberg-logo_icon_white.svg",
            "assets/pictures/LinkedIn_icon.svg"]

    const color_bg = ["bg-white", "bg-cyan-500", "bg-black"]
    const theme = [
        "text-black bg-white border border-4 border-black",
        "bg-cyan-500 text-white border-4 border-black",
        "bg-white border border-4 border-black text-black"];
    const listItems = socials.map((item, i) => {
        return (
            <div className="flex flex-wrap" >
                <a href={`${links[i]}`}>
                    <div className={`flex flex-wrap justify-center transition-all hover: hover:scale-125 ${theme[i]} px-5 py-12 text-3xl font-semibold `}>
                        {item}
                        <Image
                        className=" ml-2 h-12 w-12"
                        src={`${image[i]}`}
                        width={500}
                        height={500}
                        />
                    </div>
                </a>
            </div>
        );
    });
    return (
        <div id="cards" className="p-10 bg-white h-full">
            <div className="bg-black  relative rounded ">
                <div id="box-violet" className="  pl-10 pt-5 pb-20 space-y-10 space-x-2 rounded -translate-x-4 -translate-y-4 bg-white">
                    <div id="social" className="flex flex-wrap justify-center gap-2">
                        {listItems}
                    </div>
                </div>
            </div>
        </div>
    )
}
