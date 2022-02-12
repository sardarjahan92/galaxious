import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DetailsHome from "./DetailsHome";

const electricalTransmitter = [
  {
    alt: "Temperature",
    img: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Temperature",
    main: "Temperature",
    para: "The design of temperature transmitters includes a transmitter, and a temperature sensor. The sensor sends a signal to the transmitters, which calculates the temperature, and converts it into an output signal. There are two common types of temperature transmitters:",
  },
  {
    alt: "Flow",
    img: "https://images.pexels.com/photos/3213746/pexels-photo-3213746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Flow",
    main: "Flow",
    para: "As the name suggests, these transmitters provide measurements on the flow of liquid or fluid. This transmitter type consists of a transmitter and a flow sensor in one product. This allows it to generate an output up to 20mA. Flow transmitters are designed using different technologies, these include ultrasonic flow sensors, differential pressure flow sensors, and velocity flow sensors.",
  },
  {
    alt: "Level",
    img: "https://cdn.pixabay.com/photo/2018/12/13/03/18/smart-3872063__340.jpg",
    title: "Level",
    main: "Level",
    para: "Home Security System that detects any unwanted entry or motion into the property and send an immediate alet to the monitoring station which inform the concern people ,police ,hospital and fire station.",
  },

  {
    alt: "Pressure",
    img: "https://images.pexels.com/photos/6913818/pexels-photo-6913818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Pressure",
    main: "Pressure",
    para: "We understand that some times peope are not available to water the plant may be out-of-station or other reason .So we provide state of art device that help you watering you plant time to time.",
  },
];

function ElectricalService() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxtop}>
        <Typography
          variant="h2"
          style={{
            textAlign: "center",
            fontFamily: "cursive",
            margin: "10px",
            textShadow: "5px 5px 5px #3af85f",
          }}
        >
          Electrical Service
        </Typography>
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            fontFamily: "cursive",
            textShadow: "5px 5px 5px rgb(66, 245, 147)",
          }}
        >
          We Provide the installation, repairing and commission of Electrical as
          well as Mechanical Machine to the industries
        </Typography>
      </Box>
      <div className={classes.root}>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          onClick={classes.colorChange}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              variant="h4"
              className={classes.heading}
              style={{
                textAlign: "center",
                textShadow: "5px 5px 5px #3af85f",
              }}
            >
              Transmitter
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.box}>
            {electricalTransmitter.map((value) => (
              <DetailsHome data={value} />
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              variant="h4"
              className={classes.heading}
              style={{
                textAlign: "center",
                textShadow: "5px 5px 5px #3af85f",
              }}
            >
              Control Wiring
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              variant="h4"
              className={classes.heading}
              style={{
                textAlign: "center",
                textShadow: "5px 5px 5px #3af85f",
              }}
            >
              3-Phase Wiring
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontFamily: "cursive", fontSize: "55px" }}>
              <img src=" " alt="pogo" />
              <Box>
                <Typography>Gogo Master</Typography>
              </Box>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              variant="h4"
              className={classes.heading}
              style={{
                textAlign: "center",
                textShadow: "5px 5px 5px #3af85f",
              }}
            >
              Electrical Panel
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              variant="h4"
              className={classes.heading}
              style={{
                textAlign: "center",
                textShadow: "5px 5px 5px #3af85f",
              }}
            >
              Push Button Panel
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>SOMAO</Typography>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      </React.Fragment>
  );
}

export default ElectricalService;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    flexBasis: "100%",
    flexShrink: 0,
    fontWeight: "bold",
  },
  boxtop: {
    marginTop: "110px",
    marginBottom: "20px",
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
  },
  colorChange: {
    color: "blue",
  },
}));
