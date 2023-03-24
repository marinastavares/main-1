import { StateContext } from "@/utils/StateContext";
import { Box, Button } from "@mui/material";
import React, { useContext } from "react";

const DeployModel = ({ onNextClick }: { onNextClick: () => void }) => {
  const { isLoading } = useContext(StateContext);

  return (
    <Box display="flex" justifyContent="center">
      <Button
        onClick={onNextClick}
        variant="contained"
        size="large"
        color="primary"
      >
        {isLoading ? "..." : "💫 DEPLOY A SHOOTING STAR 💫"}
      </Button>
    </Box>
  );
};

export default DeployModel;
