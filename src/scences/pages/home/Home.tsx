import { Grid, Icon, Typography, Box } from "@mui/material";
import resumeData from "../../../utils/resumeData";
import TimelineDot from "@mui/lab/TimelineDot";
import Header from "../../../components/header/Header";


const Home = () => {
  return (
    <Box  style={{ marginTop: "10px" }}>
        {/* About Me */}
      <Grid container style={{padding: "30px"}}>
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

<Box style={{backgroundColor: "var(--bg-service)"}}>
        {/* Services */}
        <Grid container style={{ marginTop: "20px", padding: "30px"}}>
        <Header title="my services" />

        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent="space-around">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={5}>
                <Box
                  style={{
                    textAlign: "center",
                    marginTop: "40px",
                    padding: "40px",
                    borderRadius: "16px",
                    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",
                    backgroundColor: "var(--bg-primary)",
                  }}
                >
                  <Icon
                    style={{
                      fontSize: "46px",
                      fontWeight: "300",
                      color: "var(--service-color)",
                    }}
                  >
                    {service.icon}
                  </Icon>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "35px",
                      textTransform: "capitalize",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: "var(--link-color)",
                    }}
                  >
                    {service.describe}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
</Box>

      {/* Skills */}
      <Grid container style={{ marginTop: "10px", padding: "30px" }}>
        <Header title="skills" />

        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: "25px" }}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={5.5} md={2.6} sx={{ padding: "20px",
              marginTop: {xs: "15px", md: 0},
              borderRadius: "16px",
              boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",}}>
                <Typography variant="h6" style={{
                  textTransform: "uppercase",
                  fontSize: "15px",
                  fontWeight: "600",
                }}>{skill.title}</Typography>
                <Typography variant="body2" style={{ marginTop: "10px" }}>
                  {skill.description.map((element) => (
                    <Box  style={{ display: "flex", alignItems: "center" }}>
                      <TimelineDot
                        variant="outlined"
                        style={{
                          color: "var(--icon-color)",
                          borderColor: "var(--bg-dot)",
                          padding: "2px",
                          marginRight: "10px",
                        }}
                      />
                      <Typography  style={{
                      color: "var(--link-color)",
                    }}>{element}</Typography>
                    </Box>
                  ))}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      
    </Box>
  )
}

export default Home