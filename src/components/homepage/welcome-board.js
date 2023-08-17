//react
import React, {useState, useEffect} from 'react'

//material-ui
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";

//animation
import CountUp from "react-countup";

//chart elements
import { Chart as ChartJS, registerables } from "chart.js";
import { Line, Chart } from "react-chartjs-2";

//data processing
import {
  getDataForYear,
  getDataForYearTotalDonations,
  getDataDonorsForYear,
} from "../../utils/donations-processor";

import { yearsArray } from "../../utils/last-five-years";

const years = yearsArray();

const WelcomeBoard = (props) => {
  
  ChartJS.register(...registerables);

  const [yearDonations, setDataDonations] = useState(0);
  const [yearDonors, setDataDonors] = useState(0);

  //initialize data
  useEffect(() => {
    let yearAmount = getDataForYearTotalDonations(
      props.donationAmounts,
      props.donationDates,
      props.dataSelection
    );
    let donorAmount = getDataDonorsForYear(
      props.data.allDonorDataJson.edges,
      props.dataSelection
    );
    setDataDonations(yearAmount);
    setDataDonors(donorAmount);
  }, []);

  const dataForLineChart = getDataForYear(
    props.donationAmounts,
    props.donationDates,
    props.dataSelection
  );

  const handleDataUpdate = (event) => {
    if (event.target.value === "Last Five Years") {
      props.setDataSelection("Last Five Years");
    } else {
      props.setDataSelection(event.target.value);
      let yearAmount = getDataForYearTotalDonations(
        props.donationAmounts,
        props.donationDates,
        event.target.value
      );
      let donorAmount = getDataDonorsForYear(
        props.data.allDonorDataJson.edges,
        event.target.value
      );
      setDataDonations(yearAmount);
      setDataDonors(donorAmount);
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper className={props.styles.section}>
        <h1>Welcome Aaron</h1>
        <hr />

        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <h2>Donation data from</h2>
          </Grid>
          <Grid item>
            <FormControl>
              <Select
                labelId="simple-selection"
                id="simple-select"
                value={props.dataSelection}
                label={"dataSelector"}
                onChange={handleDataUpdate}
              >
                <MenuItem value={`Last Five Years`}>Last Five Years</MenuItem>
                <MenuItem value={years[0]}>{years[0]}</MenuItem>
                <MenuItem value={years[1]}>{years[1]}</MenuItem>
                <MenuItem value={years[2]}>{years[2]}</MenuItem>
                <MenuItem value={years[3]}>{years[3]}</MenuItem>
                <MenuItem value={years[4]}>{years[4]}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item lg={8}>
            <Card variant="outlined">
              <Line datasetIdKey="id" data={dataForLineChart} />
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card variant="outlined" className={props.styles.section}>
              <h3>Donations</h3>
              <CountUp
                className={props.styles.bigData}
                end={yearDonations}
                prefix=""
              />
              <h3>Donors</h3>
              <h1>{yearDonors}</h1>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )

} 

export default WelcomeBoard