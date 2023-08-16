import React from "react";
import Layout from "../components/layout";

import { makeStyles } from "@material-ui/core/styles";

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
      <BestMonthCard data={data} styles={styles} />
      <TopDonorsCard data={data} styles={styles} />
    </Layout>
  );
};

export default Home;
