import { Divider, Typography } from "@material-ui/core";
import React from "react";
import "./style.scss";
import left from "../../assets/icons/left.avif";
import right from "../../assets/icons/right.avif";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
const InfoSection = ({ item }) => {
  return (
    <div>
      <div>
        <Typography variant="h6" component="h3">
          {item?.title}
        </Typography>
        <Typography variant="body1" component="p" style={{ color: "gray" }}>
          Bedrooms: {item?.bedrooms}
        </Typography>
        <Typography variant="body1" component="p" style={{ color: "gray" }}>
          Address: {item?.address}
        </Typography>
      </div>
      <div className="Category-box">
        <div className="icon">
          <img src={left} alt="" />
          <Typography variant="h6" component="h3">
            Guest
          </Typography>
          <img src={right} alt="" />
        </div>
        <div className="descrption">
          <Typography
            variant="body1"
            component="p"
            style={{ fontWeight: "bold" }}
          >
            One of the most lovaed homes on airbnb, according to guest
          </Typography>
        </div>
        <div className="rate">
          <Typography
            variant="body1"
            component="p"
            style={{ fontWeight: "bold" }}
          >
            49
          </Typography>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className="review">
          <Typography
            variant="body1"
            component="p"
            style={{ fontWeight: "bold" }}
          >
            49
          </Typography>
          <Typography variant="body1" component="p">
            review
          </Typography>
        </div>
      </div>

      <div>
        <Divider orientation="horizontal" variant="middle" flexItem />
        <ul className="info">
          <li>
            <MapsHomeWorkOutlinedIcon />
            <div className="content-ul">
              <Typography variant="h6" component="h4">
                {item?.title}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                style={{ color: "gray" }}
              >
                Bedrooms: {item?.bedrooms}
              </Typography>
            </div>
          </li>

          <li>
            <MapsHomeWorkOutlinedIcon />
            <div className="content-ul">
              <Typography variant="h6" component="h4">
                {item?.title}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                style={{ color: "gray" }}
              >
                Bedrooms: {item?.bedrooms}
              </Typography>
            </div>
          </li>

          <li>
            <MapsHomeWorkOutlinedIcon />
            <div className="content-ul">
              <Typography variant="h6" component="h4">
                {item?.title}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                style={{ color: "gray" }}
              >
                Bedrooms: {item?.bedrooms}
              </Typography>
            </div>
          </li>

          <li>
            <MapsHomeWorkOutlinedIcon />
            <div className="content-ul">
              <Typography variant="h6" component="h4">
                {item?.title}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                style={{ color: "gray" }}
              >
                Bedrooms: {item?.bedrooms}
              </Typography>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoSection;
