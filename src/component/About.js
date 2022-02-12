import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";
import Cimage from "../images/pipe.jpg";
function About() {
  const classes = useStyle();
  return (
    <React.Fragment>
      <Box>
        <Box className={classes.images}>
          <Typography className={classes.imgSmall}>
            About Galaxious Solution
          </Typography>
        </Box>
        <Box className={classes.quotes}>
          <Typography className={classes.quotesF}>
            Believe us,We are
            <span style={{ color: "#1678FB" }}>Engineer</span>
          </Typography>
          <Typography className={classes.quotesS}>
            Solving the Real World Problem of Industries
          </Typography>
        </Box>
        <Box style={{ borderTop: "1px solid #61dafb", margin: "25px" }}>
          <Typography className={classes.quotesSecondF}>Our Mission</Typography>
          <Typography className={classes.quotesSecondS}>
            Our Aim is to bring cutting-edge Tools & Technology to Industries of
            the world
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default About;

const useStyle = makeStyles((theme) => ({
  quotesSecondS: {
    margin: "20px",
    marginLeft: "20px",
    fontSize: "30px",
    color: "#1678FB",
    textShadow: "5px 5px 5px rgb(66, 245, 147)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  quotesSecondF: {
    margin: "20px",
    fontSize: "40px",
    color: "black",
    textShadow: "5px 5px 5px rgb(66, 245, 147)",
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },
  quotes: {
    margin: "35px 45px",
  },
  quotesF: {
    fontSize: 60,
    color: "black",
    lineHeight: 1,
    textShadow: "5px 5px 5px #3af85f",
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  quotesS: {
    fontSize: 60,
    color: "black",
    marginTop: "10px",
    lineHeight: 1,
    textShadow: "5px 5px 5px #3af85f",
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },
  images: {
    background: `url(${Cimage})`,
    objectFit: "contain",
    width: "100%",
    height: "50vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
    },
  },
  imgSmall: {
    fontSize: 66,
    color: "white",
    lineHeight: 1,
    alignItems: "center",
    marginTop: "40px",
    textShadow: "5px 5px 5px rgb(66, 245, 147)",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      fontSize: "140%",
      marginTop: "1px",
    },
  },
}));
