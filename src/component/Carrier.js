import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Cimage from "../images/carrier.jpg";

const initialValue = {
  name: "",
  message: "",
  email: "",
  createDate: new Date(),
};
function Carrier() {
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
    <React.Fragment>
      <Box className={classes.images}>
        <Typography className={classes.imagesTypo}>
          Be part of 5th Industrial Revolution
        </Typography>
      </Box>
      <Box className={classes.mainBox}>
        <Typography className={classes.mainBoxSendYourProfile}>
          Send your Profile
        </Typography>

        <Box className={classes.formbox}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Name"
              name="name"
              className={classes.textfield}
              onChange={(e) => handleChange(e)}
              lassName={classes.textField}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Email"
              name="email"
              className={classes.textfield}
              onChange={(e) => handleChange(e)}
            />
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                className={classes.uploadbutton}
                variant="contained"
                color="primary"
                component="span"
              >
                Upload Resume
              </Button>
            </label>
            <Button
              variant="contained"
              color="primary"
            //  onClick={() => savePost()}
              className={classes.button}

onClick={()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLScFPendlEC3o9UB3MRv1nXEOU9UgHaLqG1WvUVSYM0kYHlUrA/viewform")}
            >
              Upload Your Profile
            </Button>
          </form>
        </Box>
      </Box>
</React.Fragment>
  );
}

export default Carrier;

const useStyle = makeStyles((theme) => ({
  uploadbutton: {
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  mainBoxSendYourProfile: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: "250%",
    textShadow: "5px 5px 5px #3af85f",
    marginTop: "20px",
    marginBottom: "20px",
    backgroundColor: "#f5f5f5",
    [theme.breakpoints.down("sm")]: {
      fontSize: "150%",
    },
  },
  mainBox: {
    margin: "20px",
    marginLeft: "80px",
    marginRight: "80px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    height: "80vh",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "2px 2px 2px 2px",
    },
  },
  button: {
    marginTop: "15px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },
  formbox: {
    marginLeft: "470px",
    width: "35%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    height: "50vh",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5px",
      width: "100%",
    },
  },
  textfield: {
    flex: 1,
    marginTop: "25px",
    width: "100%",
    fontSize: 25,
    padding: "4px",
  },
  root: {
    margin: "50px",
    minWidth: 275,
    minHeight: 300,
    [theme.breakpoints.down("sm")]: {
      minWidth: 2,
      minHeight: 200,
    },
  },
  images: {
    background: `url(${Cimage})`,
    objectFit: "contain",
    width: "100%",
    height: "70vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
    },
  },
  imagesTypo: {
    fontSize: 80,
    color: "#FFFFFF",
    textShadow: "5px 5px 5px #3af85f",
    marginLeft: "35px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      marginLeft: "5px",
    },
  },
}));
