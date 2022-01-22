import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import { starType } from "./writing/starType";
import { Box } from "@mui/system";

export const ToDoShowHeart = () => {
  const [heart, setHeart] = useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);
  // const heartOnClick = (event: any, newValue: any) => {
  //   setHeart(newValue);
  //   console.log(heart);
  // };
  return (
    <div>
      <StyledRating
        name="read-only"
        defaultValue={2}
        value={heart}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        readOnly
      />
      {/* {heart !== null && (
        <Box sx={{ ml: 2 }}>{starType[hover !== -1 ? hover : heart]}</Box>
      )} */}
      <h3>{heart}</h3>
    </div>
  );
};

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
