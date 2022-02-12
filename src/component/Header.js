import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import {
  AppBar,
  Typography,
  MenuItem,
  Menu,
  Box,
  List,
  ListSubheader,
  Toolbar,
  IconButton,
  Drawer,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ContactsIcon from "@material-ui/icons/Contacts";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import NestedMenuItem from "material-ui-nested-menu-item";
import MenuIcon from "@material-ui/icons/Menu";
import ListAltIcon from "@material-ui/icons/ListAlt";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import WorkIcon from "@material-ui/icons/Work";
function Header() {
  const classes = useStyle();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);
  const handleRightClick = (event) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.paeY,
      left: event.pageX,
    });
  };
  const handleItemClick = (event) => {
    setMenuPosition(null);
  };

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const [anchorEls, setAnchorEls] = React.useState(null);
  const opens = Boolean(anchorEls);

  const handleClicklink = (event) => {
    setAnchorEls(event.currentTarget);
  };

  const handleCloses = () => {
    setAnchorEls(null);
  };
  const OnClickDrawer=()=>{
    setOpenDrawer(false);
  }

  return (
    <React.Fragment>
      <AppBar className={classes.component}>
        <Box display="flex" p={2}>
          <Box p={2} flexGrow={2}>
            <Typography>
              <Link to="/" className={classes.link}>
                Galaxious Solution
              </Link>
            </Typography>
          </Box>
          <Box p={2}>
            <Typography>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </Typography>
          </Box>
          <Box p={2}>
            <Typography>
              <Link to="/about" className={classes.link}>
                About
              </Link>
            </Typography>
          </Box>
          <Box p={2}>
            <Typography onMouseOver={handleRightClick}>Products</Typography>
          </Box>
          <Box p={2}>
            <Typography>
              <Link to="/carrier" className={classes.link}>
                Carrier
              </Link>
            </Typography>
          </Box>
          <Box p={2} className={classes.box}>
            <Typography>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </Typography>
          </Box>
        </Box>
        <Menu
          id="menu-appbar"
          anchorPosition={menuPosition}
          anchorReference="anchorPosition"
          open={!!menuPosition}
          onClose={() => setMenuPosition(null)}
          className={classes.menu}
        >
          <NestedMenuItem
            label="Industrial Service"
            parentMenuOpen={!!menuPosition}
            onClick={handleItemClick}
          >
            <MenuItem onClick={handleItemClick}>
              <Link to="/eservice" className={classes.link}>
                Electrical Services
              </Link>
            </MenuItem>
            <MenuItem onClick={handleItemClick}>
              <Link to="/eactuator" className={classes.link}>
                Electrical Actuator
              </Link>
            </MenuItem>
            <MenuItem onClick={handleItemClick}>
              <Link to="/solarsetup" className={classes.link}>
                Solar Setup
              </Link>
            </MenuItem>
            <MenuItem onClick={handleItemClick}>
              <Link to="/power" className={classes.link}>
                Transmission Line
              </Link>
            </MenuItem>
          </NestedMenuItem>
          <NestedMenuItem
            label="General Services"
            parentMenuOpen={!!menuPosition}
            onClick={handleItemClick}
          >
            <MenuItem onClick={handleItemClick}>
              <Link to="/homeautomation" className={classes.link}>
                Home Automation
              </Link>
            </MenuItem>
          </NestedMenuItem>
          <NestedMenuItem
            label="AirPurifier"
            parentMenuOpen={!!menuPosition}
            onClick={handleItemClick}
          >
            <MenuItem onClick={handleItemClick}>
              <Link to="/mask" className={classes.link}>
                Mask
              </Link>
            </MenuItem>
            <MenuItem onClick={handleItemClick}>
              <Link to="/car" className={classes.link}>
                Car
              </Link>
            </MenuItem>
            <MenuItem onClick={handleItemClick}>
              <Link to="/bike" className={classes.link}>
                Bike
              </Link>
            </MenuItem>
            <MenuItem onClick={handleItemClick}>
              <Link to="/house" className={classes.link}>
                House
              </Link>
            </MenuItem>
            <MenuItem onClick={handleItemClick}>
              <Link to="/office" className={classes.link}>
                Office
              </Link>
            </MenuItem>
          </NestedMenuItem>
        </Menu>
      </AppBar>
      <AppBar position="static" className={classes.respon}>
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit">
            Galaxious Solution
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={() => setOpenDrawer(!openDrawer)} />
            <Drawer
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              anchor="left"
              className={classes.drawer}
            >
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Galaxious Solutions
                  </ListSubheader>
                }
                className={classes.root}
              >
                <Link to="/" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" onClick={()=>OnClickDrawer()}/>
                  </ListItem>
                </Link>
                <Link to="/about" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" onClick={()=>OnClickDrawer()}/>
                  </ListItem>
                </Link>

                <ListItem button onClick={handleClick}>
                  <ListItemIcon>
                    <ListAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Products" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      className={classes.nested}
                      onClick={handleClicklink}
                    >
                      <ListItemText primary="Industrial Service"/>
                      <ListItemIcon>
                        <ArrowForwardIosIcon />
                      </ListItemIcon>
                    </ListItem>

                    <Menu
                      id="fade-menu"
                      anchorEl={anchorEls}
                      keepMounted
                      open={opens}
                      onClose={handleCloses}
                      TransitionComponent={Fade}
                    >
                      <Link to="/eservice" className={classes.link}>
                        <MenuItem onClick={handleCloses}>
                          Electrical Service
                        </MenuItem>
                      </Link>
                      <Link to="/eactuator" className={classes.link}>
                        <MenuItem onClick={handleCloses}>
                          Electrical Actuator
                        </MenuItem>
                      </Link>
                      <Link to="/solarsetup" className={classes.link}>
                        <MenuItem onClick={handleCloses}>Solar Setup</MenuItem>
                      </Link>
                      <Link to="/power" className={classes.link}>
                        <MenuItem onClick={handleCloses}>
                          Transmission Line
                        </MenuItem>
                      </Link>
                    </Menu>

                    <Link to="/homeautomation" className={classes.link}>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="General Service" />
                        <ListItemIcon>
                          <ArrowForwardIosIcon />
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                    <Link to="/mask" className={classes.link}>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Air Purifier" />
                        <ListItemIcon>
                          <ArrowForwardIosIcon />
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                  </List>
                </Collapse>

                <Link to="/carrier" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Carrier" onClick={()=>OnClickDrawer()}/>
                  </ListItem>
                </Link>
                <Link to="/contact" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <ContactsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact Us" onClick={()=>OnClickDrawer()}/>
                  </ListItem>
                </Link>
              </List>
            </Drawer>
          </IconButton>
        </Toolbar>
      </AppBar>
      </React.Fragment>
  );
}

export default Header;

const useStyle = makeStyles((theme) => ({
  drawer: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "inherit",
    },
  },

  menuButton: {
    color: "blue",
    marginLeft: "20px",
  },

  respon: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexGrow: 1,
      color: "black",
      background: "#FFFFFF",
    },
  },
  box: {
    marginRight: 310,
  },
  menu: { marginTop: 65 },
  component: {
    color: "black",
    background: "#FFFFFF",
    display: "flex-wrap",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  containerright: {
    textAlign: "left",
  },
  containerleft: {
    justifyContent: "center",
    "& > *": {
      padding: 20,
    },
  },
}));
