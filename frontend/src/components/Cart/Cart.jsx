import React from "react";
import {
  makeStyles,
  Card,
  Grid,
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Button,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { STORAGE } from "../../constants/urls";
import Slider from "react-slick";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    
  },
  media: {
    height: 140,
   
    borderRadius: "12px",
  },
  card: {
    boxShadow: "none",
    position: "relative",
  },
  favoriteButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  favoriteIcon: {
    stroke: "#fff",
  },
  guestButton: {
    position: "absolute",
    margin: "4px",
    padding: "5px",
    background: "white",
    borderRadius: "20px",
    top: "8px",
    left: 0,
  },
  starContainer: {
    display: "flex",
    alignItems: "center",
   
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent:'space-between'
  },
}));

var settings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 1500,
};

const Cart = ({ item }) => {
  const classes = useStyles();
  const { id, address, title, image1, image2, image3, image4, image5, price,  } = item;
  const images = [
    `${STORAGE}${image1}`,
    `${STORAGE}${image2}`,
    `${STORAGE}${image3}`,
    `${STORAGE}${image4}`,
    `${STORAGE}${image5}`,
  ];
  const navigate = useNavigate();

  return (
    <Grid item xs={10} sm={6} lg={3}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => navigate(`/room/${id}`)}>
          <Slider {...settings}>
            {images.map((imageUrl, index) => (
              <CardMedia
                key={index}
                className={classes.media}
                src={imageUrl}
                title={title}
                component="img"
                loading="lazy"
              />
            ))}
          </Slider>
          <IconButton
            className={classes.favoriteButton}
            aria-label="add to favorites"
          >
            <FavoriteIcon className={classes.favoriteIcon} />
          </IconButton>
          <Button className={classes.guestButton}>Guest favorite</Button>
          <CardContent>
            <div className={classes.titleContainer}>
              <Typography gutterBottom variant="body1" component="h3">
                {title.substring(0, 25)}...
              </Typography>
              {/* Display stars using Star icons */}
              <div className={classes.starContainer}>
                <StarIcon className={classes.starIcon} />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                4.5
                </Typography>
              </div>
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              {address.substring(0,30)}...
            </Typography>
            <Typography variant="body1" color="textSecondary" component="b">
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Cart;
