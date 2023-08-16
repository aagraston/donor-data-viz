import React from 'react'
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles"
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({

  footerContainer: {
    padding: '2rem 0',
  }

}));

const Footer = () => {
  const Styles = useStyles();

  return (
    <Container maxWidth="md" className={Styles.footerContainer}>
      <Grid container justifyContent='center' alignItems='center'>
    <div>© Aaron Graston 2023</div>
    </Grid>
    </Container>
  )

}

export default Footer