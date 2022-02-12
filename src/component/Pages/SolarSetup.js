import React, { useState } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Button,
  Modal,
  Backdrop,
  TableRow,
  Grid,
  TableCell,
  Paper,
  TableBody,
  TableHead,
  TextField,
  Table,
  TableContainer,
} from "@material-ui/core";
import SolarPageBox from "./SolarPageBox";
import SPanel from "../../images/spanel.jpg";
import CloseIcon from "@material-ui/icons/Close";

const data = [
  {
    alt: "Solar Panel",
    main: "Solar Panel",
    content:
      "We provide solar panels of all types like Mono-crystalline ,Poly-crystalline ,Mono-PERC, bifacial and thin-film solar cell.",
  },
];

function SolarSetup() {
  const initial_data = [
    {
      id: 1,
      name: "Bulb",
      quantity: 0,
      watts: 10,
      hrs: 18,
    },
    {
      id: 2,
      name: "Ceiling Fan",
      quantity: 0,
      watts: 60,
      hrs: 24,
    },
    {
      id: 3,
      name: "Cooler",
      quantity: 0,
      watts: 200,
      hrs: 18,
    },
    {
      id: 4,
      name: "Fridge",
      quantity: 0,
      watts: 200,
      hrs: 24,
    },
    {
      id: 5,
      name: "AC",
      quantity: 0,
      watts: 1000,
      hrs: 6,
    },
    {
      id: 6,
      name: "TV",
      quantity: 0,
      watts: 60,
      hrs: 12,
    },
    {
      id: 7,
      name: "Oven",
      quantity: 0,
      watts: 1000,
      hrs: 0.2,
    },
    {
      id: 8,
      name: "Exhaust Fan",
      quantity: 0,
      watts: 60,
      hrs: 6,
    },
    {
      id: 9,
      name: "Phone charger ",
      quantity: 0,
      watts: 20,
      hrs: 5,
    },
    {
      id: 10,
      name: "Electric Kettle",
      quantity: 0,
      watts: 500,
      hrs: 0.2,
    },
    {
      id: 11,
      name: "Laptop",
      quantity: 0,
      watts: 60,
      hrs: 18,
    },
    {
      id: 12,
      name: "Desktop",
      quantity: 0,
      watts: 60,
      hrs: 18,
    },
    {
      id: 13,
      name: "Electric Iron",
      quantity: 0,
      watts: 1000,
      hrs: 0.3,
    },
    {
      id: 14,
      name: "Mixer Grinder",
      quantity: 0,
      watts: 500,
      hrs: 0.5,
    },
  ];
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [datas, setDatas] = useState(initial_data);
  const [totalValue, setTotalValue] = useState(0);

  const countTotal = (datas) =>
    datas.reduce((acc, curr) => acc + curr.watts * curr.quantity , 0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const valueSet = () => {
    setTotalValue(countTotal(datas));
    console.log("value :-", totalValue);
  };

  return (
    <React.Fragment>
      <Box className={classes.box}>
        <Typography className={classes.typ1}>
          Solar Installation for Home,Offices & Industries
        </Typography>
        <Typography className={classes.typ2}>
          we provide installation and service of the solar panels and its
          accessories from all manufactures which are pioneer in the industry.
        </Typography>
      </Box>
      <Box>
        <Button
          onClick={handleOpen}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Solar Calculator
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
          <Grid
            style={{
              height: "80vh",
              width: "90%",
              backgroundColor: "whitesmoke",
            }}
          >
            <Box style={{ display: "flex" }}>
              <Typography
                style={{
                  width: "90%",
                  alignItems: "center",
                  textAlign: "center",
                  fontSize: "35px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  backgroundColor: "black",
                  color: "white",
                  marginRight: "5px",
                  marginLeft: "25px",
                }}
              >
                Solar Calculator
              </Typography>
              <CloseIcon
                onClick={handleClose}
                style={{
                  width: "2.5%",
                  marginTop: "15px",
                  backgroundColor: "blue",
                  alignItems: "center",
                  color: "whitesmoke",
                  borderRadius: "50%",
                  marginLeft: "25px",
                }}
              />
            </Box>
            <Box style={{ display: "flex" }}>
              <Box
                style={{
                  width: "60%",
                  marginLeft: "25px",
                  height: "auto",
                  scrollBehavior: "auto",
                }}
              >
                <Paper className={classes.root}>
                  <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell className={classes.table}>S.No</TableCell>
                          <TableCell className={classes.table} align="right">
                            Electric Items
                          </TableCell>
                          <TableCell className={classes.table} align="right">
                            watts
                          </TableCell>
                          <TableCell className={classes.table} align="center">
                            Quantity
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {datas.map((row) => (
                          <TableRow hover key={row.id} role="checkbox">
                            <TableCell component="th" scope="row">
                              {row.id}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.watts}</TableCell>
                            <TableCell align="right">
                              <TextField
                                label="Fill Your Quantity"
                                type="number"
                                onChange={(e) => {
                                  row.quantity = e.target.value;
                                  setDatas([...datas]);
                                }}
                              >
                                {row.quantity}
                              </TextField>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Box>
              <Box
                style={{
                  width: "35%",
                  marginLeft: "25px",
                }}
              >
                <Box>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell className={classes.table} align="center">
                            Total KWH
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row" align="center">
                            {countTotal(datas) / 1000}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
                <Box>
                  <Box
                    style={{
                      textAlign: "center",
                      marginTop: "15px",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={valueSet}
                      style={{ backgroundColor: "black" }}
                    >
                      Get Details
                    </Button>
                    <Typography
                      style={{ textAlign: "center", marginTop: "20px" }}
                    >
                      {totalValue/ 1000}-{totalValue / 1000 + 1} kWH
                    </Typography>
                  </Box>
                  <Box style={{ marginTop: "10px" }}>
                    <Typography
                      style={{
                        width: "100%",
                        alignItems: "center",
                        textAlign: "center",
                        fontSize: "20px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        backgroundColor: "black",
                        color: "white",
                        marginRight: "5px",
                      }}
                    >
                      1KW --1Fan,1Cooler,
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Modal>
      </Box>
      <SolarPageBox data={data[0]} image={SPanel} />
      </React.Fragment>
  );
}

export default SolarSetup;

const useStyles = makeStyles((theme) => ({
  table: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  button: {
    marginTop: "10px",
    alignItems: "center",
    marginBottom: "10px",
    marginLeft: "430px",
    width: "50%",
  },
  box: {
    marginTop: "110px",
    "& :first-child": {
      fontSize: 50,
      color: "black",
      lineHeight: 1,
      textShadow: "5px 5px 5px #3af85f",
      marginLeft: "20px",
      alignItems: "center",
      textAlign: "center",
    },
    "& :last-child": {
      alignItems: "center",
      textAlign: "center",
      marginTop: "20px",
      fontSize: 20,
      color: "black",
      textShadow: "5px 5px 5px #3af85f",
      marginLeft: "35px",
    },
  },
}));
