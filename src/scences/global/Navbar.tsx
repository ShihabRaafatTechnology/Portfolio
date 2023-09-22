import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import resumeData from "../../utils/resumeData";
import CustomeButton from "../../components/button/CustomeButton";

const Navbar = () => {
  const pages = ["resume", "portfolio", "contact"];
  const { socials } = resumeData;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="container-shadow">
      <AppBar position="static" style={{ overflow: "hidden" }}>
        <Toolbar>
          {/* Homepage Icon */}
          <Box sx={{ mr: 2 }}>
            <NavLink to="/">
              <IconButton
                style={{
                  backgroundColor: "var(--bg-dot)",
                  height: "100px",
                  width: "70px",
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

          <Box sx={{ flexGrow: { xs: 12, md: 5 } }} />
          {/* Icons */}
          {Object.keys(socials).map((key, index) => (
            <IconButton
              key={index}
              sx={{
                fontSize: "16px",
                display: {xs: "none", lg: "flex"}
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
            <Link
              to="mailto:shihabraafat7@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <CustomeButton text="HIRE ME" icon={<FaTelegramPlane />} />
            </Link>
          <Box sx={{ flexGrow: 0.5 }} />

          {/* Menu */}
          <IconButton
            size="large"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            style={{ marginTop: 15 }}
          >
            {pages.map((page, index) => (
              <NavLink
                to={`/${page}`}
                className={"header-link"}
                style={{
                  fontSize: "12.5px",
                  margin: "20px 0 20px 0",
                }}
                key={index}
                onClick={handleClose}
              >
                <MenuItem style={{ display: "flex", flexDirection: "column" }}>
                  {page}
                </MenuItem>
              </NavLink>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
