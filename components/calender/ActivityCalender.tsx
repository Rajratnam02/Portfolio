"use client";

import { ActivityCalendar as ReactActivityCalendar } from "react-activity-calendar";

interface Activity {
  date: string;
  count: number;
  level: number;
}

interface ActivityCalendarProps {
  data: Activity[];
}

const ActivityCalendar = ({ data }: ActivityCalendarProps) => {
  return (
    <ReactActivityCalendar
      data={data}
      blockSize={12}
      blockMargin={4}
      fontSize={14}
    />
  );
};

export default ActivityCalendar;