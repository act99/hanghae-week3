import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { ToDoShowHeart } from "../ToDoShowHeart";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function DiaryList() {
  const dDay = useSelector((state: RootState) => state.counter.value);
  const [diaries, setDiaries] = React.useState<any>([]);
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const makeDate = new Date();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const diaryCollectionRef = collection(db, "diary");

  const fetchDiaries = async () => {
    const data = await getDocs(diaryCollectionRef);
    setDiaries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(diaries);
  };
  React.useEffect(() => {
    fetchDiaries();
  }, []);

  return (
    <div>
      {diaries.map((diary: any) => {
        const nowaDay = new Date(parseInt(diary.dday));
        if (
          parseInt(diary.dday) >= dDay - 518400000 &&
          parseInt(diary.dday) < dDay
        ) {
          return (
            <Accordion
              expanded={expanded === diary.dday}
              onChange={handleChange(diary.dday)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>
                  {nowaDay.getMonth() + 1 + "월" + nowaDay.getDate() + "일"}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ToDoShowHeart heartNumber={diary.heart} />
                <Typography>{diary.diary}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        }
      })}
    </div>
  );
}
