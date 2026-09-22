"use client";

import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = () => {
  const viewGithub = () => {
    window.open("https://github.com/Rajratnam02")
  }
  return (
    <div className="mt-15 w-full min-w-0 flex flex-col">
      <div className="flex justify-between">
        <p className="mb-6 text-3xl text-white">GitHub Activity</p>
        <p onClick={viewGithub} className="text-sm text-gray-300 transition-colors duration-300 hover:text-accent cursor-pointer">View Profile &rarr;</p>
      </div>

      <div className="w-full min-w-0 overflow-hidden rounded-xl border border-border bg-surface p-4 md:p-6">
        <div className="scrollbar-hide w-full overflow-x-auto ">
          <GitHubCalendar
            username="Rajratnam02"
            blockSize={9}
            blockMargin={3}
            fontSize={15}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubActivity;
