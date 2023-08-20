import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { Link } from "gatsby";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    padding: "2rem 0",
    backgroundColor: `${theme.palette.info}`,
  },
  stickyHeader: {},
  menuItems: {
    padding: "0 2rem",
  },
  linksStyle: {
    textDecoration: "none",
    color: 'inherit'
  },
}));

const Header = () => {
  const Styles = useStyles();

  return (
    <Container maxWidth="lg" className={Styles.stickyHeader}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Grid item>
              <div className={Styles.headerContainer}>
                <Link to="/" className={Styles.linksStyle}><h2>Donor Data Viz</h2></Link>
              </div>
            </Grid>
            <Grid item>
              <p>|</p>
            </Grid>
            <Grid item>
              <Grid
                container
                justifyContent="flex-start"
                spacing={2}
                className={Styles.menuItems}
              >
                <Grid item>
                  <Link to="/donations" className={Styles.linksStyle}>Donations</Link>
                </Grid>
                <Grid item>
                  <Link to="/donors" className={Styles.linksStyle}>Donors</Link>
                </Grid>
                <Grid item>
                  <Link to="/about" className={Styles.linksStyle}>About</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <div className={Styles.headerContainer}>Aaron Graston</div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
