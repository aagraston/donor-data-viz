import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const TopDonorsCard = (props) => {
  return (
    <Paper className={props.styles.section}>
      <p>
        A list of top donors.
      </p>
    </Paper>
  )
};

export default TopDonorsCard;
