import React from "react";
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
}));

const Home = () => {
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

  const styles = useStyles();

  return (
    <Layout>
      <WelcomeBoard data={data} styles={styles} />
      <Container maxWidth="lg">
        <Grid container justifyContent="start" spacing={2}>
          <Grid item>
            <BestMonthCard data={data} styles={styles} />
          </Grid>
          <Grid item>
            <TopDonorsCard data={data} styles={styles} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
