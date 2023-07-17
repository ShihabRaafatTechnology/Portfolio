import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";

type CustomeTimelineProps = {
  icon: JSX.Element;
};

export const CustomeTimelineSeparator = () => (
  <TimelineSeparator
    style={{
      paddingLeft: "24px",
    }}
  >
          <TimelineConnector/>
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

const CustomeTimeline: React.FC<CustomeTimelineProps> = ({ icon }) => {
  return (
    <Timeline
      style={{
        padding: "0",
      }}
    >
      {/* Item Header */}
      <TimelineItem
       style={{
        margin:"-8px 0 0 12px"
       }}
      >
        <TimelineSeparator>
          <TimelineDot
            style={{
              color: "var(--icon-color)",
              backgroundColor: "var(--bg-dot)",
              fontSize: "20px",
              padding: "4px",
            }}
          >
            {icon}
          </TimelineDot>
        </TimelineSeparator>
      </TimelineItem>
    </Timeline>
  );
};

export default CustomeTimeline;
