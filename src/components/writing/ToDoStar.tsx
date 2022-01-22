import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import { AnyArray } from "immer/dist/internal";
import { starType } from "./starType";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { heartReducer } from "../../app/services/heartSlice";

const ToDoStar = () => {
  const heart = useSelector((state: RootState) => state.heartReducer.heart);
  const dispatch = useDispatch();
  // const [heart, setHeart] = useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);
  // const heartOnClick = (event: any, newValue: any) => {
  //   setHeart(newValue);
  //   console.log(heart);
  // };
  return (
    <div>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(heart: number) =>
          `${heart} Heart${heart !== 1 ? "s" : ""}`
        }
        value={heart}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        onChange={(event, newValue) => {
          dispatch(heartReducer(newValue));
        }}
      />
      {heart !== null && (
        <Box sx={{ ml: 2 }}>{starType[hover !== -1 ? hover : heart]}</Box>
      )}
      <h3>{heart}</h3>
    </div>
  );
};

export default ToDoStar;

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
