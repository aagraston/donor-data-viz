import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { topDonorForYear } from "../../utils/donations-processor";

const TopDonorsCard = (props) => {

  const donors = props.data.allDonorDataJson.edges

  const donorData = topDonorForYear(donors, props.dataSelection)

  return (
    <Paper className={props.styles.section}>
      <p className={props.styles.centerText}>
        Your top donor in <strong>{props.dataSelection}</strong> was <strong>{donorData.topDonor}</strong> with</p>
        <p className={props.styles.centerText}><strong>{donorData.topDonations}</strong> donated</p>
    </Paper>
  )
};

export default TopDonorsCard;
