import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const UploadModel = ({ onNextClick }: { onNextClick: () => void }) => {
  const [name, setName] = useState("");

  const onChange = (event: any) => {
    setName(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" gap="16px">
      <TextareaAutosize minRows={6} value={name} onChange={onChange} />
      <Box ml="auto">
        <Button
          onClick={onNextClick}
          variant="contained"
          size="small"
          color="primary"
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default UploadModel;
