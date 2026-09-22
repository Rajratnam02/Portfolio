import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

const ContactContext = [
  {
    id: 3,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=rajratnam2003@gmail.com",
    icon: <MdEmail />,
    name: "Gmail"
  },
  {
    id: 1,
    icon: <FaSquareGithub />,
    link: "https://github.com/Rajratnam02",
    name: "GitHub"
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/ratnam05/",
    icon: <FaLinkedin />,
    name: "LinkedIn"
  },
  {
    id: 4,
    link: "https://leetcode.com/u/Rajratnam02",
    icon: <SiLeetcode />,
    name: "Leetcode"
  },
  {
    id: 5,
    link: "https://x.com/rajratnam02",
    icon: <RiTwitterXFill />,
    name: "X"
  }
];

export default ContactContext;
