import React from "react";
import Header from "./header";
import Footer from "./footer";

import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { lime, purple } from '@material-ui/core/colors'
import CssBaseline from "@material-ui/core/CssBaseline";



const theme = createTheme({
  palette: {
    type: "dark",
    primary: lime,
    secondary: purple,
  },
});

const useStyles = makeStyles((theme) => ({
  

}))

const Layout = (props) => {

  const styles = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {props.children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
