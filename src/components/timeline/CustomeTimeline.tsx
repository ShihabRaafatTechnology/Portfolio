import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineContent } from "@mui/lab";
import { Typography } from "@mui/material";

type CustomeTimelineProps = {
  icon: JSX.Element;
  title: string;
  children: React.ReactNode;
};

export const CustomeTimelineSeparator = () => (
  <TimelineSeparator
    style={{
      paddingLeft: "24px",
    }}
  >
    <TimelineConnector />
    <TimelineDot
      variant="outlined"
      style={{
        color: "var(--icon-color)",
        borderColor: "var(--bg-dot)",
        padding: "2px",
      }}
    />
  </TimelineSeparator>
);

const CustomeTimeline: React.FC<CustomeTimelineProps> = ({
  title,
  icon,
  children,
}) => {
  return (
    <Timeline
      style={{
        padding: "0",
      }}
    >
      {/* Item Header */}
      <TimelineItem
        style={{
          margin: "-8px 0 0 11px",
          alignItems: "center",
          textTransform: "capitalize",
        }}
      >
        <TimelineSeparator>
          <TimelineDot
            style={{
              color: "var(--icon-color)",
              backgroundColor: "var(--bg-dot)",
              fontSize: "20px",
              padding: "6px",
            }}
          >
            {icon}
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h6"
            style={{ fontFamily: "'Heebo', sans-serif" }}
          >
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
};

export default CustomeTimeline;
