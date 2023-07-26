import React from "react";
import "../../index.css";
import { Box, Typography } from "@mui/material";
import CustomeTimeline, {
  CustomeTimelineSeparator,
} from "../../components/timeline/CustomeTimeline";
import resumeData from "../../utils/resumeData";
import { IoGlasses } from "react-icons/io5";
import { TimelineItem, TimelineContent } from "@mui/lab";
import CustomeButton from "../../components/button/CustomeButton";
import { BiSolidDownload } from "react-icons/bi";
import styled from "styled-components";

type CustomeTimelineItemProps = {
  text: string;
  title: string;
  link: string;
};

/* Styled Components */
export const Info = styled.span``;

const CustomeTimelineItem = ({
  text,
  title,
  link,
}: CustomeTimelineItemProps) => {
  return (
    <TimelineItem>
      <CustomeTimelineSeparator />
      <TimelineContent>
        {link ? (
          <Typography
            sx={{
              fontSize: { xs: "12.5px", md: "11px" },
              marginTop: "16.5px",
            }}
          >
            <Info>
              {title}:
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--link-color)",
                  fontWeight: "bold",
                  marginLeft: "5px",
                  textDecoration: "none",
                }}
              >
                {text}
              </a>
            </Info>
          </Typography>
        ) : (
          <Typography
            sx={{
              paddingTop: "5px",
              fontSize: { xs: "12.5px", md: "11px" },
              marginTop: "12px",
            }}
          >
            <Info>{title}: </Info>
            <Info
              style={{
                color: "var(--link-color)",
                fontWeight: "bold",
              }}
            >
              {text}
            </Info>
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Sidebar = () => {
  const { name, job, email, socials, phone } = resumeData;

  return (
    <Box
      className="container-shadow"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderRadius: "6px",
      }}
    >
      <Box
        style={{
          lineHeight: "18px",
          padding: "20px",
        }}
      >
        <Typography
          className="text-uppercase"
          style={{
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          {name}
        </Typography>
        <Typography
          className="text-capitalize"
          style={{
            color: "var(--subtitle-color)",
            fontSize: "13px",
          }}
        >
          {job}
        </Typography>
      </Box>

      <Box
        style={{
          clipPath: "polygon(0 9%, 100% 0, 100% 94%, 0% 100%)",
          marginTop: "-10px",
        }}
      >
        <img
          src="https://i.ibb.co/GVKFqZq/img-portfolio.jpg"
          alt="shihab raafat"
        />
      </Box>

      <Box>
        <CustomeTimeline title="" icon={<IoGlasses />} children={undefined}></CustomeTimeline>
        <CustomeTimelineItem title="Name" text={name} link="" />
        <CustomeTimelineItem title="Job" text={job} link="" />
        <CustomeTimelineItem title="Email" text={email} link="" />
        <CustomeTimelineItem title="Phone" text={phone} link="" />
        {Object.keys(socials).map((key, index) => (
          <CustomeTimelineItem
            title={key}
            text={socials[key as keyof typeof socials].text}
            link={socials[key as keyof typeof socials].link}
            key={index}
          />
        ))}
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
          paddingBottom: "25px",
        }}
      >
        <a
          href="https://drive.google.com/file/d/1NACSYcSjD_kXIDXNko6RTXRYjzalSLSj/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <CustomeButton text={"Download CV"} icon={<BiSolidDownload />} />
        </a>
      </Box>
    </Box>
  );
};

export default Sidebar;
