import React, { useCallback, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, TextareaAutosize } from "@mui/material";
import Score from "./Score";
import { StateContext } from "@/utils/StateContext";

const Row = (props: { row: { name: string; id: string } }) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [inference, setOpenInference] = React.useState(false);
  const [value, setValue] = React.useState("");
  const response = "";

  const {
    isLoading,
    model: { data },
    getInference,
    sendModelData,
  } = useContext(StateContext);

  const onChange = useCallback((event: any) => {
    setValue(event.target.value);
  }, []);
  const onChangeInference = useCallback(async (event: any) => {
    await getInference?.(row.id);
    setOpenInference((prevState) => !prevState);
  }, []);
  const onSendDataClick = useCallback(async (event: any) => {
    await sendModelData?.(row.id, value);
  }, []);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Request Payload
              </Typography>
              <Box display="flex" flexDirection="column">
                <TextareaAutosize
                  minRows={6}
                  value={value}
                  onChange={onChange}
                />

                <Button onClick={onSendDataClick} disabled={isLoading}>
                  SEND
                </Button>
              </Box>
              {response && (
                <TextareaAutosize
                  minRows={6}
                  value={value}
                  onChange={onChange}
                />
              )}
              <Button onClick={onChangeInference}>
                {isLoading ? "..." : "Get score"}
              </Button>
              {inference && !isLoading && Object.keys(data)?.length && (
                <Score data={data} />
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
export default Row;
