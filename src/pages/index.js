import React, { useState } from "react";
import Layout from "../components/layout";

import { StylesProvider, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import WelcomeBoard from "../components/homepage/welcome-board";
import BestMonthCard from "../components/homepage/best-month";
import TopDonorsCard from "../components/homepage/top-donors";

//data-retrieval
import { graphql, useStaticQuery } from "gatsby";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "2rem",
    marginBottom: "2rem",
  },
  bigData: {
    fontSize: "3em",
    fontStyle: "bold",
    color: "#ddd043",
  },
  centerText: {
    textAlign: 'center'
  }
}));

const Home = () => {
  const donationAmounts = [];
  const donationDates = [];

  const [dataSelection, setDataSelection] = useState(2022);

  //data processing
  const data = useStaticQuery(graphql`
    query {
      allDonorDataJson {
        edges {
          node {
            username
            donations {
              date
              amount
            }
          }
        }
      }
    }
  `);

  data.allDonorDataJson.edges.forEach((e) => {
    e.node.donations.forEach((e) => {
      donationAmounts.push(e.amount);
      donationDates.push(e.date);
    });
  });

  const styles = useStyles();

  return (
    <Layout>
      <WelcomeBoard
        donationAmounts={donationAmounts}
        donationDates={donationDates}
        dataSelection={dataSelection}
        setDataSelection={setDataSelection}
        data={data}
        styles={styles}
      />
      <Container maxWidth="lg">
        <Grid container justifyContent="flex-start" spacing={2}>
          <Grid item>
            <BestMonthCard
              donationAmounts={donationAmounts}
              donationDates={donationDates}
              dataSelection={dataSelection}
              data={data}
              styles={styles}
            />
          </Grid>
          <Grid item>
            <TopDonorsCard
              donationAmounts={donationAmounts}
              donationDates={donationDates}
              dataSelection={dataSelection}
              data={data}
              styles={styles}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
