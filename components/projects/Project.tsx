import projects from "@/data/ProjectData";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="mt-30 font-coda pb-20 text-white flex flex-col items-center px-4 sm:px-6">
      <p className="text-2xl mt-10 uppercase text-lightgrey">Projects</p>
      <p className="mt-5 text-4xl sm:text-5xl md:text-6xl font-jim text-center">
        Things I&apos;ve built
      </p>
      <p className="mt-5 text-lightgrey text-center max-w-2xl text-sm sm:text-base">
        A selection of products built with thoughtful engineering, elegant
        solutions, and a focus on solving meaningful problems.
      </p>

      <div className="mt-15 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            src={project.Image}
            title={project.Name}
            tagline={project.Tagline}
            description={project.Description}
            demoLink={project.DemoLink}
            github={project.Github}
            techStack={project.TechStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
