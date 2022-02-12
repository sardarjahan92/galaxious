import React from "react";
import Facebook from "../images/facebook-brands.svg";
import Instagram from "../images/instagram-brands.svg";
import Telegram from "../images/telegram-brands.svg";
import Twitter from "../images/twitter-brands.svg";
import Watsapp from "../images/whatsapp-brands.svg";
import Youtube from "../images/youtube-brands.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.body}>
      <Typography className={classes.typo}>
        Copyright © 2021 Galaxious Solution Pvt.Ltd.
      </Typography>
      <Box className={classes.grid}>
        <img
          src={Facebook}
          className={classes.image}
          onClick={() => window.open("https://www.facebook.com/GalaxiousSolution-103839962035382")}
          alt="facebook"
        />
        <img
          src={Twitter}
          className={classes.image}
          onClick={() => window.open("https://twitter.com/GALAXIOUSSolut1?t=ttZEOe620-azb_GVqPz9iw&s=08")}
          alt="twitter"
        />
        <img
          src={Instagram}
          className={classes.image}
          onClick={() =>
            window.open("https://www.instagram.com/galaxioussolution/")
          }
          alt="instagram"
        />
        <img
          src={Watsapp}
          className={classes.image}
          onClick={() => window.open("https://wa.me/+918700525464")}
          alt="watsapp"
        />
        <img
          src={Telegram}
          className={classes.image}
          onClick={() =>
            window.open("https://t.me/Galaxioussol1")
          }
          alt="telegram"
        />
        <img
          src={Youtube}
          className={classes.image}
          onClick={() =>
            window.open("https://youtube.com/channel/UCMXMLLfeAesWmIyuisuamiA")
          }
          alt="youtube"
        />
      </Box>
    </div>
  );
}

export default Footer;

const useStyle = makeStyles((theme) => ({
  body: {
    marginTop: "50px",
    display: "flex",
    borderTop: "1px solid #61dafb",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
    [theme.breakpoints.down("xs")]: {
      display: "inline",
    },
  },
  grid: {
    width: "50%",
    height: "10%",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
      alignItems: "center",
      marginLeft:'40px'
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  typo: {
    color: "black",
    fontWeight: "bold",
    marginLeft: "100px",
    width: "50%",
    alignItems: "center",
    textAlign: "center",
    marginTop: "20px",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
      alignItems: "center",
    
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  image: {
    objectFit: "contain",
    height: "8vh",
    display: "flex",
    alignItems: "center",
    color: "#61dafb",
    margin: "10px",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      height: "6vh",
    },
    [theme.breakpoints.down("md")]: {
      height: "5vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "5vh",
    },
  },
}));
