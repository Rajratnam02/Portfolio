import axios from "axios";

const USERNAME = "Rajratnam02";

export const getLeetCodeData = async () => {
  const query = `
    query userProfileCalendar($username: String!, $year: Int) {
      matchedUser(username: $username) {
        username
        profile {
          ranking
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
        userCalendar(year: $year) {
          submissionCalendar
        }
      }
    }
  `;

  const response = await axios.post(
    "https://leetcode.com/graphql",
    {
      query,
      variables: {
        username: USERNAME,
        year: new Date().getFullYear(),
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com/",
        Origin: "https://leetcode.com",
      },
    }
  );

  const user = response.data.data.matchedUser;

  if (!user) {
    throw new Error("LeetCode user not found");
  }

  let submissionCalendar =
    user.userCalendar?.submissionCalendar || {};

  if (typeof submissionCalendar === "string") {
    submissionCalendar = JSON.parse(submissionCalendar);
  }

  const activity = Object.entries(submissionCalendar).map(
    ([timestamp, count]) => {
      const date = new Date(Number(timestamp) * 1000)
        .toISOString()
        .split("T")[0];

      let level = 0;

      if (count >= 10) level = 4;
      else if (count >= 5) level = 3;
      else if (count >= 3) level = 2;
      else if (count >= 1) level = 1;

      return {
        date,
        count,
        level,
      };
    }
  );

  const submissions =
    user.submitStats.acSubmissionNum;

  const easy =
    submissions.find((x) => x.difficulty === "Easy")?.count || 0;

  const medium =
    submissions.find((x) => x.difficulty === "Medium")?.count || 0;

  const hard =
    submissions.find((x) => x.difficulty === "Hard")?.count || 0;

  return {
    activity,

    stats: {
      totalSolved: easy + medium + hard,
      easySolved: easy,
      mediumSolved: medium,
      hardSolved: hard,
      ranking: user.profile?.ranking || 0,
    },
  };
};