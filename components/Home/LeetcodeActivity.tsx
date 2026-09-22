"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ActivityCalendar } from "react-activity-calendar";

interface Activity {
  date: string;
  count: number;
  level: number;
}

interface LeetCodeData {
  activity: Activity[];
  stats: {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    ranking: number;
  };
}

const LeetcodeActivity = () => {
  const [data, setData] = useState<LeetCodeData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/leetcode");
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch LeetCode data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <section className="w-full">
        <p className="text-gray-300">Loading...</p>
      </section>
    );
  }

  const totalSubmissions = data.activity.reduce(
    (total, day) => total + day.count,
    0
  );

  return (
    <section className="w-full mt-15">
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-coda text-3xl text-white">
            LeetCode Activity
          </h2>
        </div>

        <a
          href="https://leetcode.com/u/Rajratnam02/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-300 transition-colors duration-300 hover:text-accent"
        >
          View Profile &rarr;
        </a>
      </div>

      {/* Stats */}
      <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-border bg-surface p-5">
          <p className="font-coda text-3xl text-white">
            {data.stats.totalSolved}
          </p>

          <p className="mt-1 text-sm text-gray-300">
            Problems Solved
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-5">
          <p className="font-coda text-3xl text-white">
            {data.stats.easySolved}
          </p>

          <p className="mt-1 text-sm text-gray-300">
            Easy
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-5">
          <p className="font-coda text-3xl text-white">
            {data.stats.mediumSolved}
          </p>

          <p className="mt-1 text-sm text-gray-300">
            Medium
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-5">
          <p className="font-coda text-3xl text-white">
            {data.stats.hardSolved}
          </p>

          <p className="mt-1 text-sm text-gray-300">
            Hard
          </p>
        </div>
      </div>

      {/* Activity Calendar */}
      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-gray-300">
            Submission Activity
          </p>

          <p className="text-sm text-gray-300">
            {totalSubmissions} submissions
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          <ActivityCalendar
            data={data.activity}
            blockSize={11}
            blockMargin={4}
            fontSize={13}
            showWeekdayLabels
            showMonthLabels
            theme={{
              light: [
                "#f5f5f5",
                "#d9f2ff",
                "#a8e4ff",
                "#5dccff",
                "#00a0fd",
              ],
              dark: [
                "#171717",
                "#00334d",
                "#00577d",
                "#0081b8",
                "#00a0fd",
              ],
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LeetcodeActivity;