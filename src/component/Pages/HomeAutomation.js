import React from "react";
import {
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";
import DetailsHome from "./DetailsHome";
const data = [
  {
    alt: "CCTV Camera ",
    img: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "CCTV Camera",
    main: "CCTV Camera",
    para: "CCTV Camera is used for Monitoring and survelliance purpose ,we provide DOME and BULLET CCCTV with night vision capability to  provide the safe guard to your home and office.",
  },
  {
    alt: "Home Security System",
    img: "https://cdn.pixabay.com/photo/2018/12/13/03/18/smart-3872063__340.jpg",
    title: "Home Security System",
    main: "Home Security System",
    para: "Home Security System that detects any unwanted entry or motion into the property and send an immediate alet to the monitoring station which inform the concern people ,police ,hospital and fire station.",
  },
  {
    alt: "Water Tank",
    img: "https://images.pexels.com/photos/3213746/pexels-photo-3213746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Water Tank",
    main: "Water Level Controller and Cleaner",
    para: "Water Tank Level Controller and Indicator device tell you about the water level of the tank when it low it will start motor and when it high it will tell stop motor.",
  },
  {
    alt: "Watering the Plant Automatically",
    img: "https://images.pexels.com/photos/6913818/pexels-photo-6913818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Watering the Plant Automatically",
    main: "Watering the Plant Automatically",
    para: "We understand that some times peope are not available to water the plant may be out-of-station or other reason .So we provide state of art device that help you watering you plant time to time.",
  },
  {
    alt: "Automatically Feeding Fish",
    img: "https://images.pexels.com/photos/4266777/pexels-photo-4266777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Automatically Feeding Fish",
    main: "Automatically Feeding Fish",
    para: "Automatic Feeding Fish is an state of art technology,it helps on Feed Fish automatically with out any human intervention .It will feed your fish at regular interval of time with specific amount of feed as per requirment.",
  },
  {
    alt: "Automatic appliances control",
    img: "https://cdn.pixabay.com/photo/2019/01/05/11/05/smart-home-3914919__340.jpg",
    title: "Automatic appliances control",
    main: "Automatic appliances control",
    para: "Voice/Mobile based appliance control device will make you home really smart home .It will enable to control fan,light,A.C and other appliance via voice based /mobile/remote based device.",
  },
];

function HomeAutomation() {
  const classes = useStyle();


  return (
    <React.Fragment>
      <Box className={classes.first}>
        <Typography className={classes.welcome}>
          Welcome to the Home Automation
        </Typography>
        <Typography
          style={{
            fontSize: "30px",
            color: "#1678FB",
            textShadow: "5px 5px 5px rgb(66, 245, 147)",
          }}
        >
          A Smart Home will monitor and control home lighting,climate,system and
          application.
        </Typography>
      </Box>
      <Box className={classes.details}>
        {data.map((value) => (
          <DetailsHome data={value} />
        ))}
      </Box>
      </React.Fragment>
  );
}

export default HomeAutomation;

const useStyle = makeStyles({
  details: {
    display: "flex",
    flexWrap: "wrap",
  },
  first: {
    marginTop: "110px",
    textAlign: "center",
  },
  welcome: {
    fontSize: "50px",
    textShadow: "5px 5px 5px rgb(66, 245, 147)",
  },
});
