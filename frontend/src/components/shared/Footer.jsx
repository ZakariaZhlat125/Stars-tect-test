import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f7f7f7",
    padding: theme.spacing(4),
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: "#555555",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Support</Typography>
          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              Help Center
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              AirCover
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              Anti-discrimination
            </Link>
          </Grid>

          <Grid item xs={12}>
            {" "}
            <Link href="#" className={classes.link}>
              Disability support
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              Cancellation options
            </Link>
          </Grid>

          <Grid item xs={12}>
            {" "}
            <Link href="#" className={classes.link}>
              Report neighborhood concern
            </Link>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Hosting</Typography>
          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              Airbnb your home
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              AirCover for Hosts
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              Hosting resources
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              Community forum
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              Hosting responsibly
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              Airbnb-friendly apartments
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              Join a free Hosting class
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Airbnb</Typography>
          <Grid item xs={12}>
            {" "}
            <Link href="#" className={classes.link}>
              Newsroom
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              New features
            </Link>
          </Grid>

          <Grid item xs={12}>
            {" "}
            <Link href="#" className={classes.link}>
              Careers
            </Link>
          </Grid>

          <Grid item xs={12}>
            {" "}
            <Link href="#" className={classes.link}>
              Investors
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              Gift cards
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Link href="#" className={classes.link}>
              Airbnb.org emergency stays
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        color="textSecondary"
        style={{ marginTop: "20px" }}
      >
        © {new Date().getFullYear()} Airbnb, Inc.
        <Link href="#" className={classes.link}>
          Terms
        </Link>
        <Link href="#" className={classes.link}>
          Sitemap
        </Link>
        <Link href="#" className={classes.link}>
          Privacy
        </Link>
        <Link href="#" className={classes.link}>
          Your Privacy Choices
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Choose a language
        <Link href="#" className={classes.link}>
          English (US)
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Choose a currency
        <Link href="#" className={classes.link}>
          € EUR
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
