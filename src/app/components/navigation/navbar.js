import Link from "next/link"
import NavButton from "./navButton"

export default function Navbar() {
  return (
    <div className="mt-auto  top-0 z-50 sticky">
      <div className="bg-black rounded ">
        <div className="grid grid-cols-5 py-10 rounded -translate-x-4 -translate-y-4 bg-white">
          <div className="col-start-2 col-span-5 flex ">
            <div className="mr-auto">
              <span className="text-black font-serif text-4xl">My portfolio</span>
              <span className="animate-pulse text-black fol-bold text-2xl">| By Miikatti</span>
            </div>
            <div className="mr-auto my-auto md:space-x-5 lg:space-x-14">
              <NavButton target="" field="About"/>
              <NavButton target="cards" field="Projects"/>
              <NavButton target="social" field="Contacts"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
