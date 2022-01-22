import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ToDoStar from "./ToDoStar";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { diaryReducer } from "../../app/services/diarySlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ToDoWriting() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dDay = useSelector((state: RootState) => state.counter.value);
  const diary = useSelector((state: RootState) => state.diaryReducer.diary);
  const heart = useSelector((state: RootState) => state.heartReducer.heart);
  const dispatch = useDispatch();
  const diaryCollectionRef = collection(db, "diary");
  const date = new Date(dDay);
  const changeDiary = (event: any) => {
    dispatch(diaryReducer(event.target.value));
  };
  // const reloading = () => window.location.reload();
  const createDiary = async () => {
    await addDoc(diaryCollectionRef, {
      diary: diary,
      heart: heart,
      dday: dDay,
    });
  };
  React.useEffect(() => {}, []);
  const onBtnClick = () => {
    createDiary();
    // handleClose();
    // reloading();
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>{date.toString()}</Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            나의 하루
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            오늘 하루는 어떠셨나요?
          </Typography>
          <ToDoStar />
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="오늘의 일기를 적어주세요."
              style={{ width: 500, height: 500, marginBottom: 30, padding: 50 }}
              value={diary}
              onChange={changeDiary}
            />
            <Button variant="contained" onClick={onBtnClick}>
              저장
            </Button>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
