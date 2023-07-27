import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import resumeData from "../../utils/resumeData";
import CustomeButton from "../../components/button/CustomeButton";

const Navbar = () => {
  const pages = ["resume", "contact"];
  const { socials } = resumeData;

  return (
    <Box sx={{ flexGrow: 1 }} className="container-shadow">
      <AppBar position="static">
        <Toolbar>
          {/* Homepage Icon */}
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <NavLink to="/">
              <IconButton
                style={{
                  backgroundColor: "var(--bg-dot)",
                  padding: "22px 25px",
                  fontSize: "20.5px",
                }}
              >
                <IoHome />
              </IconButton>
            </NavLink>
          </Box>

          {/* Pages */}
          <Box
            sx={{
              flexGrow: 5,
              display: { xs: "none", md: "flex" },
              fontFamily: "'Heebo', sans-serif",
            }}
          >
            {pages.map((page, index) => (
              <NavLink
                to={`/${page}`}
                className={"header-link"}
                key={index}
                style={{ fontSize: "12.5px", marginLeft: "20px" }}
              >
                {page}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 5 }} />
          {/* Icons */}
          {Object.keys(socials).map((key, index) => (
            <IconButton
              key={index}
              sx={{
                fontSize: "16px",
              }}
            >
              <a
                href={socials[key as keyof typeof socials].link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--icon-color)" }}
              >
                {socials[key as keyof typeof socials].icon}
              </a>
            </IconButton>
          ))}

          <Box sx={{ flexGrow: 0.5 }} />

          {/* Hire Me Button */}
          <Link to="mailto:shihabraafat7@gmail.com" style={{textDecoration: "none"}}>
            <CustomeButton text="HIRE ME" icon={<FaTelegramPlane />} />
          </Link>
          <Box sx={{ flexGrow: 0.5 }} />

          {/* Menu */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
