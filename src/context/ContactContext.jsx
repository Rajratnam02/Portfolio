import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

export const contactContext = [
  {
    id: 3,
    link: "mailto:rajratnam2003@gmail.com",
    icon: <MdEmail />
  },
  {
    id: 1,
    icon: <FaSquareGithub />,
    link: "https://github.com/Rajratnam02",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/ratnam05/",
    icon: <FaLinkedin />
  },
  {
    id: 4,
    link: "https://leetcode.com/u/Rajratnam02",
    icon: <SiLeetcode />
  },
  {
    id: 5,
    link: "https://x.com/rajratnam02",
    icon: <RiTwitterXFill />
  }
];
