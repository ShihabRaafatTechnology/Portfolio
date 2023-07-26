import { Grid, Icon, Typography, Box } from "@mui/material";
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
    <>
      {/* About Me */}
      <Grid container>
        <Header title="about me" />
        <Grid item xs={12}>
          <Typography
            variant="body2"
            style={{
              letterSpacing: "0.2px",
              marginTop: "20px",
              color: "var(--dialog-color)",
            }}
          >
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      {/* Education & Experiences */}
      <Grid container style={{ marginTop: "40px" }}>
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
                      style={{ marginTop: "50px", height: "50px" }}
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
      <Grid container style={{ marginTop: "40px" }}>
        <Header title="services" />

        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent="space-around">
            {resumeData.services.map(service=>(
              <Grid item xs={12} sm={6} md={5}>
                <Box style={{
                  textAlign: "center",
                  marginTop: "40px" ,
                  padding: "40px",
                  borderRadius: "16px",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)"
                }}>
                  <Icon style={{
                    fontSize: "46px",
                    fontWeight: "300",
                    color: "var(--service-color)"
                  }}>{service.icon}</Icon>
                  <Typography variant="h6" style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "35px",
                    textTransform: "capitalize"
                  }}>{service.title}</Typography>
                  <Typography variant="body2" style={{
                    color: "var(--link-color)",
                  }}>{service.describe}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
