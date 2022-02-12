import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Box,
  Backdrop,
  Card,
  CardActionArea,
  CardActions,
  makeStyles,
  CardContent,
  CardMedia,
  Modal,
  FormControl,
  TextField,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    marginTop: "50px",
    marginLeft: "30px",
    marginRight: "10px",
    height: 440,
    width: "40%",
    padding: "50px",
    border: "1px solid #3af85f",
  },
  buttonCard: {
    margin: "5px",
    alignItems: "center",
  },
  button: {
    marginRight: "60px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },textField:{
    marginLeft:'40px',
    marginRight:'40px',
    marginTop:'20px',
    marginBottom:'20px'
  },textarea:{
    padding:"20px"
  }
}));
const initialValue = {
  name: "",
  message: "",
  email: "",
  createDate: new Date(),
};
function DetailsHome({ data }) {
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = useState(initialValue);
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
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={data.alt}
          height="250"
          image={data.img}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.main}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h5" style={{fontWeight:"500"}}>
            {data.para}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonCard}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          className={classes.button}
        >
          Send Enquiry
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Box>
            <FormControl style={{ backgroundColor: "white" }}>
              <TextField
                id="outlined-basic"
                placeholder="Name"
                className={classes.textField}
                onChange={(e) => handleChange(e)}
                variant="outlined"
                name="name"
              />
              <TextField
                id="outlined-basic"
                placeholder="Email/Phone Number"
                className={classes.textField}
                onChange={(e) => handleChange(e)}
                variant="outlined"
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
                style={{ width: "100%" }}
                onClick={() => savePost()}
              >
                Send Message
              </Button>
            </FormControl>
          </Box>
        </Modal>
        <Button variant="contained" color="primary" className={classes.button}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default DetailsHome;
