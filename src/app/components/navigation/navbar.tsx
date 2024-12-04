import Link from "next/link";
import NavButton from "./navButton";
import type { Navbar } from "@/types";

export default function Navbar(navbar: Navbar) {
  return (
    <>
      <div className="py-10 pb-0 h-auto bg-slate-100/20 rounded-3xl px-5 md:sticky mt-0 md:top-0 z-50 backdrop-filter backdrop-blur-[15px]">
        <div className=" mx-5 top-6 z-50 sticky">
          <div className="bg-[#2b2e3a] rounded-xl ">
            <div className="grid grid-cols-5 py-10 rounded-xl -translate-x-4 -translate-y-4 bg-white">
              <div className="col-start-2 col-span-5 flex ">
                <div className="mr-auto">
                  <span className="text-[#2b2e3a] font-serif text-4xl">
                    Portfolio
                  </span>
                  <span className="animate-pulse text-[#2b2e3a] fol-bold text-2xl">
                    | By {navbar.title}
                  </span>
                </div>
                <div className="mr-auto flex flex-wrap my-auto md:space-x-5 lg:space-x-14">
                  {navbar.links.map((link: any) => (
                    <NavButton target="" field={link.text} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
