import type { Hero } from "@/types";

export default function welcome(hero: Hero) {
  return (
    <div id="info" className="h-fit pt-12 pb-36 top-0 ">
      <div className="relative mx-auto max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-slate-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="relative m-auto w-full flex flex-col justify-center lg:items_start items-center">
          <div className={`bg-[#2b2e3a] px-12 pt-16 pb-4`}>
            <h1 className=" text-5xl font-bold text-white/95 ">{hero.title}</h1>
          </div>
          <div className="  flex items-center justify-center px-16"></div>
          <div className="relative mt-5 mr-8">
            <h2 className="md:text-xl  font-bold text-black/95 ">
              {hero.welcome}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
