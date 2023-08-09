import React from "react";
import Layout from "../components/layout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card"

import {Chart as ChartJS, registerables } from 'chart.js'
import { Line, Chart } from "react-chartjs-2";

import { getDataForYear } from "../utils/donations-processor";

import { graphql, useStaticQuery } from "gatsby";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "2rem",
  },
}));

const Home = () => {

  ChartJS.register(...registerables)

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

  data.allDonorDataJson.edges.forEach((e) => {
    e.node.donations.forEach((e) => {
      donationAmounts.push(e.amount);
      donationDates.push(e.date);
    });
  });

  const dataForLineChart = getDataForYear(donationAmounts, donationDates, 2021);

  const styles = useStyles();

  return (
    <Layout>
      <Container maxWidth="lg">
        <Paper className={styles.section}>
          <h1>Welcome Aaron</h1>

          <Grid container spacing={2}>
            <Grid item lg={8}>
              <Card variant="outlined">
                <Line
                  datasetIdKey="id"
                  data= {dataForLineChart}
                />
              </Card>
            </Grid>
            <Grid item lg={4}>
              <Card variant="outlined">Some words</Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Home;
