import { CardMedia, Grid, Paper, makeStyles } from "@material-ui/core";
import React from "react";
import { ImageUrl } from "../../utils/helperFunction";

const useStyles = makeStyles(() => ({
  container: {
    margin: "auto",
    maxWidth: 1160,
  },
  containerMedia: {},
  mediaLeft: {
    width: "100%",
    height: "300px",
    marginBottom: 10,
    borderRadius: "15px  0 0  15px",
  },
  mediaRight: {
    width: "100%",
    height: "142px",
  },
  mediaRightEven: {
    borderRadius: "0 15px 15px 0 ",
  },
}));

const ImageSection = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.containerMedia} container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.mediaLeft}>
          <CardMedia
            src={ImageUrl(item, 1)}
            className={classes.mediaLeft}
            title="Left image"
            component="img"
            loading="lazy"
          />
        </Paper>
      </Grid>

      {/* Right column */}
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          {[2, 3, 4, 5].map((index) => (
            <Grid key={index} item xs={6}>
              <Paper
                className={`${classes.mediaRight} ${
                  index % 2 !== 0 ? classes.mediaRightEven : ""
                }`}
              >
                <CardMedia
                  src={ImageUrl(item, index)}
                  className={`${classes.mediaRight} ${
                    index % 2 !== 0 ? classes.mediaRightEven : ""
                  }`}
                  title={`Image ${index}`}
                  component="img"
                  loading="lazy"
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageSection;
