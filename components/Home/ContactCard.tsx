"use client";

import type { ReactNode } from "react";

interface ContactCardProps {
  link: string;
  icon: ReactNode;
  name: string;
}

const ContactCard = ({ link, icon, name }: ContactCardProps) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className="flex-1 min-w-[120px] cursor-pointer h-12 flex rounded-lg gap-3 items-center px-5 bg-[#1C1C1E] transition-colors duration-200 hover:bg-[#2C2C2E]"
    >
      <div className="h-full flex items-center justify-center text-2xl text-white">
        {icon}
      </div>
      <div className="text-white text-sm">{name}</div>
    </div>
  );
};

export default ContactCard;
