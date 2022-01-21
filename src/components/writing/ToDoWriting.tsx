import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ToDoStar from "./ToDoStar";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { db } from "../../firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
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
  const [value, setValue] = React.useState("");
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  const onBtnClick = () => {
    setValue("");
  };
  React.useEffect(() => {
    async function fetchWritingData() {
      const query = await getDocs(collection(db, "bucket"));
      console.log(query);
    }
  }, []);

  console.log(value);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            나의 하루
          </Typography>
          <ToDoStar />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            style={{ width: 400, height: 600 }}
            value={value}
            onChange={handleChange}
          />
          <Button onClick={onBtnClick}>저장</Button>
        </Box>
      </Modal>
    </div>
  );
}
