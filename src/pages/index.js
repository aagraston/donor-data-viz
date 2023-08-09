import React, { useState } from "react";
import Layout from "../components/layout";

//material ui
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem  from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

//animation
import CountUp from 'react-countup'

//chart elements
import { Chart as ChartJS, registerables } from "chart.js";
import { Line, Chart } from "react-chartjs-2";

//data-retrieval
import { graphql, useStaticQuery } from "gatsby";

//data processing
import { getDataForYear, getDataForYearTotalDonations } from "../utils/donations-processor";
import { yearsArray } from "../utils/last-five-years";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "2rem",
  },
  bigData: {
    fontSize: "5rem",
    fontStyle: "bold",
  },
}));

const years = yearsArray()

const Home = () => {
  ChartJS.register(...registerables);

  //data processing
  const data = useStaticQuery(graphql`
    query {
      allDonorDataJson {
        edges {
          node {
            donations {
              date
              amount
            }
          }
        }
      }
    }
  `);

  const donationAmounts = [];
  const donationDates = [];
  const [dataSelection, setDataSelection] = useState(2022);
  const [yearDonations, setDataDonations] = useState(0);

  data.allDonorDataJson.edges.forEach((e) => {
    e.node.donations.forEach((e) => {
      donationAmounts.push(e.amount);
      donationDates.push(e.date);
    });
  });

  const dataForLineChart = getDataForYear(donationAmounts, donationDates, dataSelection);

  const styles = useStyles();

  const handleDataUpdate = (event) => {
    if (event.target.value === "Last Five Years") {
      setDataSelection("Last Five Years")
    }
    else {
      setDataSelection(event.target.value)
      let yearAmount = getDataForYearTotalDonations(donationAmounts, donationDates, event.target.value)
      setDataDonations(yearAmount)
    }
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <Paper className={styles.section}>
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
                  value={dataSelection}
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
              <Card variant="outlined" className={styles.section}>
                <h3>Donations</h3>
                <CountUp className={styles.bigData}
                end={yearDonations} 
                prefix="$"/>
                <h3>Donors</h3>
                <h1>42</h1>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Home;
