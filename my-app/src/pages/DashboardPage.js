import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { lazy, Suspense } from "react";

import { Footer } from "../components/Footer";
import { Progress } from "../components/Progress";

const TodoAppLazy = lazy(() => import("../apps/TodoApp"));

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

export default function DashboardPage() {
  const classes = useStyles();

  return (
    <>
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
              Welcome to My Dashboard!!!
            </Typography>
            <div className={classes.heroButtons}>
              <Suspense fallback={<Progress />}>
                <TodoAppLazy />
              </Suspense>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}></Grid>
        </Container>
      </main>
      <Footer>
        <Typography variant="h6" align="center" gutterBottom>
          Dashboard Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Footer>
    </>
  );
}
