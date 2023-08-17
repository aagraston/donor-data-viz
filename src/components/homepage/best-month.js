import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { getBestMonth } from "../../utils/donations-processor";

const BestMonthCard = (props) => {

  const bestMonthData = getBestMonth(props.donationAmounts, props.donationDates, props.dataSelection);

  return (
    <Paper className={props.styles.section}>
      <p>
        Your best month for donations in <strong>{props.dataSelection}</strong> was <strong>{bestMonthData.monthName}</strong> with
      </p>
      <p className={props.styles.centerText}><strong>{bestMonthData.monthTotal}</strong> in donations</p>
    </Paper>
  );
};

export default BestMonthCard;
