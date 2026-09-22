import type { ElementType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDatabase } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { RiGitBranchFill } from "react-icons/ri";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiFirebase,
  SiJsonwebtokens,
  SiTailwindcss,
} from "react-icons/si";

interface ProjectCardProps {
  src: string;
  title: string;
  tagline: string;
  description: string;
  demoLink: string;
  github: string;
  techStack: string[];
}

const techIcons: Record<string, ElementType> = {
  React: SiReact,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  "Socket.IO": SiSocketdotio,
  Yjs: RiGitBranchFill,
  Firebase: SiFirebase,
  Zustand: FaDatabase,
  JWT: SiJsonwebtokens,
  "Tailwind CSS": SiTailwindcss,
  Nodemailer: FiMail,
};

const ProjectCard = ({
  src,
  title,
  tagline,
  description,
  demoLink,
  github,
  techStack,
}: ProjectCardProps) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border-2 border-dashed border-famousgrey transition-all duration-500 hover:border-[#9A9A9A]">
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-70 overflow-hidden border-b border-[#4D4D4E]">
        <Image
          src={src}
          alt={`${title} project preview`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mx-5 py-4">
        <p className="font-coda text-xl sm:text-2xl text-white">{title}</p>

        <p className="mt-1 text-sm text-gray-300">{tagline}</p>

        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          {description}
        </p>

        {/* Tech Stack scrolling strip */}
        <div className="relative mt-4 w-full overflow-hidden">
          <motion.div
            className="flex w-max gap-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...techStack, ...techStack].map((tech, index) => {
              const Icon = techIcons[tech];

              return (
                <div
                  key={`${tech}-${index}`}
                  className="flex shrink-0 items-center gap-1.5 rounded-md border border-[#4D4D4E] px-2.5 py-1.5 text-xs text-gray-300"
                >
                  {Icon && <Icon className="text-sm" />}
                  <span>{tech}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Links */}
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-4 py-2 text-sm text-black transition-colors duration-300 hover:bg-accent"
          >
            Live Demo ↗
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#4D4D4E] px-4 py-2 text-sm text-white transition-colors duration-300 hover:border-white"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
