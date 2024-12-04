import type { Component, Skills } from "@/types";

export default function skills(props: { skills: Skills }) {
  const skills = props.skills;

  const listItems =
    skills.skillItems.map((skill, i: number) => {
      return (
        <div
          key={skill._key}
          className={`flex flex-wrap gap animate-[hop_1s_ease-in-out] `}
        >
          <div className={`flex  py-4 px-2 my-5 mr-5  text-blue-950 text-md`}>
            {skill.skillName || "Error"}
          </div>
        </div>
      );
    }) || "Error";

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
