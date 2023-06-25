import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];
const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function PlansPage() {
  const classes = useStyles();
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px",
    },
    header: {
      fontSize: "32px",
      marginBottom: "20px",
    },
    description: {
      fontSize: "16px",
      marginBottom: "40px",
    },
    plansContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "60%",
    },
    plan: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "30%",
      padding: "20px",
      border: "1px solid lightgray",
      borderRadius: "10px",
    },
    planName: {
      fontSize: "24px",
      marginBottom: "10px",
    },
    planPrice: {
      fontSize: "20px",
      color: "green",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Plans</h1>
      <p style={styles.description}>Here's a list of our pricing plans:</p>
      <div style={styles.plansContainer}>
        <div style={styles.plan}>
          <h2 style={styles.planName}>Plan A</h2>
          <p style={styles.planPrice}>$10/month</p>
        </div>
        <div style={styles.plan}>
          <h2 style={styles.planName}>Plan B</h2>
          <p style={styles.planPrice}>$20/month</p>
        </div>
        <div style={styles.plan}>
          <h2 style={styles.planName}>Plan C</h2>
          <p style={styles.planPrice}>$30/month</p>
        </div>
      </div>
    </div>
  );
};
