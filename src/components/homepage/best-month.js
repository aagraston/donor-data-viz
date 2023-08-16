import React from 'react'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const BestMonthCard = (props) => {

  return (
    <Container maxWidth="lg">
      <Paper className={props.styles.section}>
        <p>Your best month for {'insert data here'}, was {'month data here'}</p>
      </Paper>
    </Container>
  )

}

export default BestMonthCard