import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core";
import logo from "../asset/logo.png";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "rgba(255,255,255,0.95)",
    boxShadow: "none",
  },
  toolbar: {
    minHeight: 50,
    
  },

  appBarSelect: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const [trigger, setTrigger] = useState(true);

  const listener = (e) => {
    setTrigger(window.pageYOffset > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  return (
    <Slide in={trigger} direction={"down"}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar className={classes.toolbar}  >
            <div className={classes.appBarSelect}>
              <img
                style={{ resizeMode: "contain", width: 25 }}
                src={logo}
                alt="Background"
              />

              <Typography className={classes.text} variant="h6">
                Home
              </Typography>

              <Typography className={classes.text} variant="h6">
                Interiors
              </Typography>
              <Typography className={classes.text} variant="h6">
                About
              </Typography>
              <Typography className={classes.text} variant="h6">
                Contact
              </Typography>

              <div style={{ width: 40 }} />
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
