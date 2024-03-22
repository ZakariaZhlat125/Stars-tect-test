import React from "react";
import { useParams } from "react-router-dom";
import { showData } from "../../utils/fetchData";
import { useMetaitonFetch } from "../../hooks/useMetaitonFetch";
import { CardMedia, Grid, Paper, makeStyles } from "@material-ui/core";
import { STORAGE } from "../../constants/urls";
import ImageSection from "./ImageSection";
import TitleSection from "./TitleSection";
import InfoSection from "./InfoSection";

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

const SignalRoom = () => {
  const { id } = useParams();
  const classes = useStyles();
  const { isLoading, data } = useMetaitonFetch(showData, `/house/${id}`);
  const item = data?.data;



  return (
    <Grid className={classes.container} container spacing={2}>
    <TitleSection item={item} />
     <ImageSection item={item}/>
      {/* Additional Grid */}
    <InfoSection item={item} />
    </Grid>
  );
};

export default SignalRoom;
