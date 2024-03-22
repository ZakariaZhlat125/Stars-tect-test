import React from "react";
import { showData } from "../../utils/fetchData";
import { useMutationHook } from "../../hooks/useMutationHook ";
import { useMetaitonFetch } from "../../hooks/useMetaitonFetch";
import Cart from "../../components/Cart/Cart";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
  },
  progress: {
    padding: theme.spacing(10),
  },
  marginTopTwo: {
    marginTop: theme.spacing(2),
  },
}));

const Home = () => {
  const { isLoading, data } = useMetaitonFetch(showData, "/house");
  //   const { isLoading, data } = useMetaitonFetch(showData, "/house");
  console.log(data);
  const items = data?.data;
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      item
      spacing={2}
      xs={10}
      sm={12}
    >
      {items && items.map((item) => <Cart key={item.id} item={item} />)}
    </Grid>
  );
};

export default Home;
