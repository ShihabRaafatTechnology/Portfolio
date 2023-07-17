import React from "react";
import { Button } from "@mui/material";

type ButtonProps = {
  text: string;
  icon: JSX.Element;
};

const CustomeButton = ({ text, icon }: ButtonProps) => {
  return (
    <Button
      endIcon={
        icon ? (
          <div
            style={{
              color: "var(--icon-colot)",
              backgroundColor: "var(--bg-primary)",
              borderRadius: "50px",
              height: "22px",
              width: "22px",
              fontSize: "10px",
              lineHeight: "29px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </div>
        ) : null
      }
      sx={{
        backgroundColor: "var(--bg-dot)",
        color: "var(--icon-color)",
        fontSize: "9px",
        fontWeight: "bold",
        border: 0,
        borderRadius: "50px",
        padding: "0px 8px",
        outline: "none",
        lineHeight: "35px",
        letterSpacing: "2px",
        display: "flex",
        justifyContent: "space-around",
        "&:hover": {
          backgroundColor: "var(--primary-hover-color)"
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomeButton;
