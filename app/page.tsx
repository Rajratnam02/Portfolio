"use client"
import MainHome from "@/components/Home/Home";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/projects/Project";
import Skill from "@/components/skills/Skill";
import { useState } from "react";

const Home = () => {
  const [isActive, setIsActive] = useState<"home" | "project" | "skill">("home");
  return (
    <div className="bg-[#0B0B0D] min-h-screen flex flex-col items-center w-full ">
      <Navbar isActive={isActive} setIsActive={setIsActive} />
      {isActive == "home" && <MainHome setIsActive={setIsActive} />}
      {isActive == "project" && <Project />}
      {isActive == "skill" && <Skill />}

    </div>
  )
}

export default Home;