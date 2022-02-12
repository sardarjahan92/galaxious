import React from "react";
import { Button, Box, makeStyles, Typography } from "@material-ui/core";

function SolarPageBox({ data, image }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.full}>
        <Box className={classes.left}>
          <img src={image} alt={data.alt} className={classes.image} />
        </Box>
        <Box className={classes.right}>
          <Typography className={classes.ty1}>{data.main}</Typography>
          <Typography className={classes.typ2}>
            {data.content}
            <Box
              style={{
                display: "flex",
                marginTop: "50px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "100px", marginRight: "500px" }}
              >
                Send Enquiry
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ float: "right" }}
              >
                Details
              </Button>
            </Box>
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default SolarPageBox;

const useStyles = makeStyles((theme) => ({
  ty1: {
    alignItems: "center",
    textAlign: "center",
    margin: "5px",
    marginBottom: "10px",
    fontSize: "35px",
    textShadow: "5px 5px 5px 	#40ff00",
  },
  typ2: {
    fontSize: "25px",
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "30px",
  },
  full: {
    marginTop: "10px",
    width: "100%",
    height: "40vh",
    display: "flex",
    marginBottom: "20px",
  },
  left: {
    marginLeft: "18px",
    marginRight: "50px",
    width: "25%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    height: "38vh",
  },
  right: {
    width: "68%",
    marginLeft: "5px",
    marginRight: "7px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    height: "38vh",
  },
  image: {
    objectFit: "contain",
    height: "38vh",
  },
}));
