import React from "react";
import Layout from "../components/layout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import {Chart} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js'



const useStyles = makeStyles((theme) => ({
  section: {
    padding: "2rem",
  },
}));

const Home = () => {
  const styles = useStyles();

  return (
    <Layout>
      <Container maxWidth="lg">
        <Paper className={styles.section}>
          <h1>Welcome Aaron</h1>

          <Grid container spacing={2}>
            <Grid item lg={8}>
              <Card variant="outlined">
                <Chart 
                
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
