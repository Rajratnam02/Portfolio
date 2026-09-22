import SkillContext from "@/data/SkillData";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <div className="mt-30 pb-20 font-coda text-white flex flex-col items-center px-4 sm:px-6">
      <p className="mt-10 text-2xl uppercase text-lightgrey">Skills</p>

      <p className="mt-5 text-4xl sm:text-5xl md:text-6xl font-jim text-center">
        Tools I work with
      </p>

      <p className="mt-5 text-lightgrey text-center max-w-2xl text-sm sm:text-base">
        Technologies and tools I use to build scalable, interactive, and
        production-ready applications.
      </p>

      <div className="mt-15 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl">
        {SkillContext.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
