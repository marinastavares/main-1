import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Box, Button } from "@mui/material";
import React from "react";

const DeployModel = ({ onNextClick }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Button
        onClick={onNextClick}
        variant="contained"
        size="large"
        color="primary"
      >
        💫 DEPLOY A SHOOTING STAR 💫
      </Button>
    </Box>
  );
};

export default DeployModel;
