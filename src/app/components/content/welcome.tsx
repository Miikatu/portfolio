import theme from "./styles.module.css";

export default function welcome(hero: any) {
  return (
    <div id="info" className="w-full h-fit pt-12 pb-36 top-0 ">
      <div className="m-auto h-full w-full flex flex-col justify-center lg:items_start items-center">
        <div className={`${theme.primary} px-12 pt-16 pb-4`}>
          <h1 className=" text-5xl  font-bold text-white/95 ">{hero.title}</h1>
        </div>
        <div className="mt-5 mr-8">
          <h2 className="md:text-xl  font-bold text-black/95 ">
            {hero.welcome}
          </h2>
        </div>
      </div>
    </div>
  );
}
