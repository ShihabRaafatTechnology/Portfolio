import Sidebar from "./scences/global/Sidebar";
import Navbar from "./scences/global/Navbar";
import Resume from "./scences/pages/resume/Resume";
import Contact from "./scences/pages/contact/Contact";
import { Container, Grid, Box } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./scences/global/Footer";
import Home from "./scences/pages/home/Home";
import Portfolio from "./scences/pages/portfolio/Portfolio";

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3.5} lg={3}>
          <Sidebar />
        </Grid>
        <Grid item xs>
          <BrowserRouter>
            <Navbar />
            <Box
              style={{
                backgroundColor: "var(--bg-primary)",
                margin: "10px 0",
                borderRadius: "6px",
                boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.13)",
              }}
            >
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio/>} />
              </Routes>
            </Box>
          </BrowserRouter>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
