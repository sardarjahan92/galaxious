import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import LocationImages from "../images/location.svg";
import { useHistory } from "react-router-dom";
import {
  Button,
  makeStyles,
  FormControl,
  TextField,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import Cimage from "../images/contact.jpg";

const initialValue = {
  name: "",
  message: "",
  email: "",
  createDate: new Date(),
};
function Contact() {
  const [post, setPost] = useState(initialValue);
  const classes = useStyle();
  const history = useHistory();
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const savePost = async (e) => {
    console.log(post);
    history.push("/");
  };
  return (
      <Box>
        <Box className={classes.images}>
          <Typography className={classes.imagesF}>Feel Free to ...</Typography>
          <Typography className={classes.imagesS}>Contact Us</Typography>
        </Box>
        <Box className={classes.root}>
          <Box className={classes.office}>
            <Box className={classes.logoloc}>
              <img
                src={LocationImages}
                className={classes.imageLoc}
                alt="logo"
              />
            </Box>
            <Box className={classes.locdetails}>
              <Typography className={classes.address}>ADDRESS</Typography>
              <Typography className={classes.addressM}>
                AT-PATEL NAGAR, PO-PHUSRO,DIST-BOKARO, JHARKHAND,829144
              </Typography>
              <Box className={classes.phone}>
                <PhoneIcon className={classes.phoneIcon} />
                <Typography className={classes.phoneNumber}>
                  9438376549
                </Typography>
              </Box>
              <Box className={classes.mail}>
                <MailIcon className={classes.mailIcon} />
                <Typography className={classes.mailNumber}>admin@galaxioussolution.com</Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.form}>
            <Typography className={classes.formTypo}>Contact Us</Typography>
            <FormControl>
              <TextField
                id="standard-basic"
                placeholder="Name"
                className={classes.textField}
                onChange={(e) => handleChange(e)}
                name="name"
              />
              <TextField
                id="standard-basic"
                placeholder="Email"
                className={classes.textField}
                onChange={(e) => handleChange(e)}
                name="email"
              />
              <TextareaAutosize
                rowsMin={5}
                placeholder="Message"
                className={classes.textarea}
                onChange={(e) => handleChange(e)}
                name="description"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => savePost()}
              >
                Send Message
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Box>
  );
}

export default Contact;

const useStyle = makeStyles((theme) => ({
  mailNumber:{
    [theme.breakpoints.down("sm")]: {
      color: "grey",
      fontSize:"12px"
    },
  },
  mailIcon: {
    margin: "10px 30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      margin: "5px 5px",
      color: "blue",
    },
  },
  mail: { alignItems: "center", textAlign: "center", display: "flex" },
  phoneNumber: {
    [theme.breakpoints.down("sm")]: {
      color: "grey",
    },
  },
  phoneIcon: {
    margin: "10px 30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      margin: "5px 5px",
      color: "blue",
    },
  },
  phone: {
    alignItems: "center",
    textAlign: "center",
    display: "flex",
  },
  addressM: {
    marginTop: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      display: "flex",
    },
  },
  address: {
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      textAlign: "center",
      alignItems: "center",
    },
  },
  button: {
    width: "150%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  formTypo: {
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  textField: {
    flex: 1,
    width: "150%",
    fontSize: 25,
    marginBottom: "9px",
    borderLeft: "1px solid  #61dafb",
    padding: "4px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  textarea: {
    width: "150%",
    border: "none",
    fontSize: 21,
    borderLeft: "1px solid  #61dafb",
    marginBottom: "9px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  imageLoc: {
    objectFit: "contain",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  locationIcon: {
    width: "50%",
  },
  locdetails: {
    width: "50%",
    marginRight: "40px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      marginLeft: "70px",
    },
  },
  logoloc: {
    width: "50%",
    alignItems: "center",
  },
  form: {
    borderLeft: "1px solid  #61dafb",
    width: "50%",
    textAlign: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignItems: "center",
    },
  },
  office: {
    width: "50%",
    textAlign: "center",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      alignItems: "center",
      display: "flex",
    },
  },
  root: {
    display: "flex",
    margin: "50px",
    minWidth: 275,
    minHeight: 300,
    [theme.breakpoints.down("sm")]: {
      display: "inline",
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
  },
  imagesF: {
    fontSize: 36,
    color: "#FFFFFF",
    lineHeight: 1,
    textShadow: "5px 5px 5px #3af85f",
    marginLeft: "20px",
  },
  imagesS: {
    fontSize: 80,
    color: "#FFFFFF",
    textShadow: "5px 5px 5px #3af85f",
    marginLeft: "35px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1px",
      marginRight: "15px",
      fontSize: 50,
    },
  },
}));
