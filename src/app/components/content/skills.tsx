import theme from "./styles.module.css";

export default function skills(skills: JSON) {
  const { items } = skills;
  //const color = ["bg-red-500", "bg-yellow-500", "bg-cyan-500", "bg-green-500"];
  /*const color_shadow = [
    "shadow-red-500/50",
    "shadow-yellow-500/50",
    "shadow-cyan-500/50",
    "shadow-green-500/50",
  ];*/
  console.log(theme);
  const listItems = items.map((item: any, i: any) => {
    return (
      <div className=" flex flex-wrap gap">
        <div
          className={`flex bg-[#e6e8f1] py-4 px-2 rounded-3xl  my-5 mr-5  text-blue-950 text-md`}
        >
          {item.skillName || "Error"}
        </div>
      </div>
    );
  });

  return (
    <section>
      <div
        id="cards"
        className={`p-5 pt-5 bg-[#f0f1fa] justify-center items-center `}
      >
        <h1 className="text-4xl text-blue-950 font-bold justify-center flex flex-wrap ">
          {skills.title}
        </h1>
        <div className="justify-center flex flex-wrap">{listItems}</div>
      </div>
    </section>
  );
}
