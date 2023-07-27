import { Grid, Typography, Box } from "@mui/material";
import resumeData from "../../../utils/resumeData";
import CustomeTimeline, {
  CustomeTimelineSeparator,
} from "../../../components/timeline/CustomeTimeline";
import TimelineItem from "@mui/lab/TimelineItem";
import { MdWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { TimelineContent } from "@mui/lab";
import Header from "../../../components/header/Header";

const Resume = () => {
  return (
    <Box style={{padding: "30px 30px 60px 30px"}}>
      {/* Education & Experiences */}
      <Grid container style={{ marginTop: "10px" }}>
        <Header title="resume" />
        <Grid item xs={12} style={{ marginTop: "50px" }}>
          <Grid container>
            {/* Experiences */}
            <Grid item xs={12} md={6}>
              <CustomeTimeline title="working experiences" icon={<MdWork />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomeTimelineSeparator />
                    <TimelineContent
                      style={{ marginTop: "60px", height: "90px" }}
                    >
                      <Typography
                        style={{
                          textTransform: "capitalize",
                          fontFamily: "'Heebo', sans-serif",
                          fontSize: "16.5px",
                          letterSpacing: "0.2px",
                        }}
                      >
                        {experience.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{
                          textTransform: "capitalize",
                          fontFamily: "'Heebo', sans-serif",
                          fontSize: "12.5px",
                          letterSpacing: "0.2px",
                          color: "var(--link-color)",
                        }}
                      >
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          textTransform: "capitalize",
                          fontSize: "12.5px",
                          letterSpacing: "0.2px",
                          marginTop: "6px",
                          color: "var(--link-color)",
                        }}
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomeTimeline>
            </Grid>
            {/* Educations */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ marginTop: { xs: "100px", md: "0" } }}
            >
              <CustomeTimeline title="Educations" icon={<PiStudentFill />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomeTimelineSeparator />
                    <TimelineContent
                      style={{ marginTop: "50px", height: "40px" }}
                    >
                      <Typography
                        style={{
                          textTransform: "capitalize",
                          fontFamily: "'Heebo', sans-serif",
                          fontSize: "16.5px",
                          letterSpacing: "0.2px",
                        }}
                      >
                        {education.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{
                          textTransform: "capitalize",
                          fontFamily: "'Heebo', sans-serif",
                          fontSize: "12.5px",
                          letterSpacing: "0.2px",
                          color: "var(--link-color)",
                        }}
                      >
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          textTransform: "capitalize",
                          fontSize: "12.5px",
                          letterSpacing: "0.2px",
                          marginTop: "6px",
                          color: "var(--link-color)",
                        }}
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomeTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
