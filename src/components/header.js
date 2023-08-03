import React from 'react'
import Container from "@material-ui/core/Container";
import { makeStyles, createTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    padding: `${theme.spacing(0)}`,
    backgroundColor: `${theme.palette.info}`
  }

}))

const Header = () => {

  const Styles = useStyles()

  return (
    <Container maxWidth="md">
    <div className={Styles.headerContainer}>This is the header</div>
    </Container>
  )
}

export default Header