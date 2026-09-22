import type { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  icon: ReactNode;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="group flex p-4 sm:p-6 md:p-8 w-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
      <div className="text-3xl sm:text-4xl text-white transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <span className="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white text-center">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;