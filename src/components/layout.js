import React from "react";
import Header from "./header";
import Footer from "./footer";

import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { lime, purple } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme({
  palette: {
    type: "light",
    primary: lime,
    secondary: purple,
  },
});

const useStyles = makeStyles((theme) => ({
  fullHeight: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  flexOne: {
    flex: "1",
  },
}));

const Layout = (props) => {
  const Styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={Styles.fullHeight}>
        <div className={Styles.flexOne}>
          <Header />
          {props.children}
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
