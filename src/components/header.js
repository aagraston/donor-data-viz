import React from 'react'
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid'
import { makeStyles, createTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    padding: '2rem 0',
    backgroundColor: `${theme.palette.info}`
  },
  stickyHeader: {
  }


}))

const Header = () => {

  const Styles = useStyles()

  return (
    <Container maxWidth="lg" className={Styles.stickyHeader}>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item>
        <div className={Styles.headerContainer}><h2>Donor Data Viz</h2></div>
        </Grid>
        <Grid item>
        <div className={Styles.headerContainer}>Aaron Graston</div>
        </Grid>
      
      </Grid>
    
    </Container>
  )
}

export default Header