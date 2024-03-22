import React from "react";
import { Button, IconButton, Typography } from "@material-ui/core";
import { Favorite, Upload } from "@mui/icons-material";

const TitleSection = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Typography variant="h4" component="h2">
        {item?.title}
      </Typography>
      <div>
        <Button>
          {/* <IconButton aria-label="save"> */}
          <Upload />
          {/* </IconButton> */}
          Share
        </Button>
        <Button>
          {/* <IconButton aria-label="share"> */}
          <Favorite />
          Save
          {/* </IconButton> */}
        </Button>
      </div>
    </div>
  );
};

export default TitleSection;
