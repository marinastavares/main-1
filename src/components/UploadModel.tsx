import { StateContext } from "@/utils/StateContext";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Box, Button } from "@mui/material";
import React, { useContext, useState } from "react";

const UploadModel = ({
  onNextClick,
}: {
  onNextClick: (value: string) => void;
}) => {
  const { isLoading } = useContext(StateContext);
  const [name, setName] = useState("");

  const onChange = (event: any) => {
    setName(event.target.value);
  };

  const onClick = () => {
    onNextClick(name);
  };

  return (
    <Box display="flex" flexDirection="column" gap="16px">
      <TextareaAutosize minRows={6} value={name} onChange={onChange} />
      <Box ml="auto">
        <Button
          onClick={onClick}
          variant="contained"
          size="small"
          color="primary"
        >
          {isLoading ? "..." : "Send"}
        </Button>
      </Box>
    </Box>
  );
};

export default UploadModel;
