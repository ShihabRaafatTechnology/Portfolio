import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box style={{backgroundColor: "var(--icon-color)",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "6px",
}}>
      <Typography style={{
              color: "var(--bg-primary)",
              textTransform: "capitalize",
      }} variant="body2">shihab raafat</Typography>
      <Typography style={{
        color: "var(--copyright-color)",
      }} variant="body2">
        &copy; {new Date().getFullYear()} All rights reserved. Designed by
        <a href="https://github.com/ShihabRaafatTechnology" style={{
          textDecoration: "none",
          color: "var(--bg-primary)",
          marginLeft: "5px",
        }}>ShihabRaafatTechnology</a>
      </Typography>
    </Box>
  );
};

export default Footer;
