import React from "react";
import Sidebar from "./scences/global/Sidebar";
import Navbar from "./scences/global/Navbar";
import Resume from "./scences/pages/resume/Resume";
import Portfolio from "./scences/pages/portfolio/Portfolio";
import Contact from "./scences/pages/contact/Contact";
import Blog from "./scences/pages/blog/Blog";
import { Container, Grid } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./scences/global/Footer";

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
            <Routes>
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
