import {
  Grid,
  Typography,
  Box,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../../../components/header/Header";

const Portfolio = () => {
  return (
    <Box style={{ padding: "30px 30px 60px 30px" }}>
      <Grid container style={{ marginTop: "10px" }}>
        <Header title="portfolio" />
        <Grid item xs={12} style={{ marginTop: "50px" }}>
          <Grid container spacing={5}>
            {/*  Dashboard Template */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  maxWidth: 345,
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",
                }}
              >
                <CardMedia
                  component="img"
                  alt="dashboard template"
                  height="190px"
                  image="https://i.ibb.co/v467QLR/Dashboard.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dashboard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Data analysis and control of data and employee data via the
                    dashboard. This site is under construction, This's dashboard
                    build by ReactJS, TypeScript, MaterialUI
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    fontSize: "12.5px",
                  }}
                >
                  <Link
                    to="https://shihab-dashboard.netlify.app/geography"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Demo
                    </Typography>
                    </Link>
                  <Link
                    to="https://github.com/ShihabRaafatTechnology/Dashboard"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Source Code
                    </Typography>
                  </Link>
                </CardActions>
              </Box>
            </Grid>

            {/* NASA Page */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  maxWidth: 345,
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",
                }}
              >
                <CardMedia
                  component="img"
                  alt="NASA page template"
                  height="190px"
                  image="https://i.ibb.co/18dj7TK/NASA-Website-Redesign-on-Behance.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    NASA
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The National Aeronautics and Space Administration is an independent agency. I love redesigning the NASA website. This's page build by
                    Wordpress
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    fontSize: "12.5px",
                  }}
                >
                  <Link
                    to="https://www.youtube.com/watch?v=uMrKUIChqlU"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Demo
                    </Typography>
                  </Link>
                </CardActions>
              </Box>
            </Grid>

            {/* Twiiter Page */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  maxWidth: 345,
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",
                }}
              >
                <CardMedia
                  component="img"
                  alt="twiiter page template"
                  height="190px"
                  image="https://i.ibb.co/MR5RRTF/Twitter.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Twitter
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Twitter page is a simplified version, You can upload and
                    browse tweets. This's page build by MaterialUI, ReactJS
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    fontSize: "12.5px",
                  }}
                >
                  <Link
                    to="https://reactmui.netlify.app/"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Demo
                    </Typography>
                  </Link>
                  <Link
                    to="https://github.com/ShihabRaafatTechnology/Twitter-website-very-simple-"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Source Code
                    </Typography>
                  </Link>
                </CardActions>
              </Box>
            </Grid>

            {/* Cinema Ticket Page */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  maxWidth: 345,
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",
                }}
              >
                <CardMedia
                  component="img"
                  alt="cinema ticket template"
                  height="190px"
                  image="https://i.ibb.co/mGh9hnd/Movie-Seat-App.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cinema Ticket
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is possible to reserve cinema seats online, This's page
                    build by Vanilla Javascript And Bootstrap 5
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    fontSize: "12.5px",
                  }}
                >
                  <Link
                    to="https://shihab-cinema-ticket.netlify.app/"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Demo
                    </Typography>
                  </Link>
                  <Link
                    to="https://github.com/ShihabRaafatTechnology/booking-movie-tickets"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Source Code
                    </Typography>
                  </Link>
                </CardActions>
              </Box>
            </Grid>

            {/* Clubhouse Clone */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  maxWidth: 345,
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",
                }}
              >
                <CardMedia
                  component="img"
                  alt="portfolio page template"
                  height="190px"
                  image="https://images.unsplash.com/photo-1613288092085-eb081fde1509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Clubhouse Clone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Imagine you have an app on your phone that lets you listen in on other people's live conversations. This's page build
                    by React.js & Material UI
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    fontSize: "12.5px",
                  }}
                >
                  <Link
                    to="https://club-house-shihab.netlify.app/"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Demo
                    </Typography>
                  </Link>
                  <Link
                    to="https://github.com/ShihabRaafatTechnology/Clubhouse-Clone"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Source Code
                    </Typography>
                  </Link>
                </CardActions>
              </Box>
            </Grid>

            {/* Youtube Clone */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  maxWidth: 345,
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.13)",
                }}
              >
                <CardMedia
                  component="img"
                  alt="portfolio page template"
                  height="190px"
                  image="https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1221&q=80"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Youtube Clone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  YouTube is an American online video sharing and social media platform headquartered. This's page build by React.js & Material UI
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    fontSize: "12.5px",
                  }}
                >
                  <Link
                    to="https://www.facebook.com/100007482430165/videos/1553582268448807/"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Demo
                    </Typography>
                  </Link>
                  <Link
                    to="https://github.com/ShihabRaafatTechnology/Youtube_Clone"
                    style={{
                      textDecoration: "none",
                      color: "var(--secindary-color)",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "6px 8px",
                        "&:hover": {
                          color: "var(--icon-color)",
                          cursor: "pointer",
                          backgroundColor: "var(--bg-dot)",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      Source Code
                    </Typography>
                  </Link>
                </CardActions>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
