import { Grid, Typography } from "@mui/material";


type HeaderProps = {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <Grid item style={{ position: "relative" }}>
          <Typography
            variant="h6"
            style={{
              position: "relative",
              textTransform: "capitalize",
              fontFamily: "'Heebo', sans-serif",
              fontSize: "17.5px",
              letterSpacing: "0.2px",
              zIndex: 1,
            }}
          >
            {title}
          </Typography>
          <span
            style={{
              position: "absolute",
              height: "7px",
              width: "100%",
              bottom: 5,
              opacity: 0.4,
              left: 0,
              backgroundColor: "var(--bg-dot)",
            }}
          ></span>
    </Grid>
  )
}

export default Header