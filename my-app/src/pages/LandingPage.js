import { Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

import { Footer } from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main style={{ backgroundColor: "white" }}>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome to My App!!!
            </Typography>
            <Container className={classes.cardGrid} maxWidth="lg">
              <Grid container spacing={4}></Grid>
            </Container>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      Our Plans
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}></Grid>
        </Container>
      </main>
      <Footer>
        <Typography variant="h6" align="center" gutterBottom>
          My App Footer
        </Typography>
      </Footer>
    </React.Fragment>
  );
}
