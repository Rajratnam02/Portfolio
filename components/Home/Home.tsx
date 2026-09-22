import { Dispatch, SetStateAction } from "react";
import About from "./About";
import Contact from "./Contact";
import GithubActivity from "./GithubActivity";
import Hero from "./Hero";
import LeetCode from "./Leetcode";

type Section = "home" | "project" | "skill";

interface HomeProps {
  setIsActive: Dispatch<SetStateAction<Section>>;
}

const MainHome = ({ setIsActive }: HomeProps) => {
  return (
    <div className="mt-20 mb-10 font-coda text-white w-full max-w-5xl border-2 border-famousgrey border-dashed rounded-2xl p-4 sm:p-6 md:p-10">
      <Hero setIsActive={setIsActive} />
      <About />
      <LeetCode />
      <GithubActivity />
      <Contact />
    </div>
  );
};

export default MainHome;