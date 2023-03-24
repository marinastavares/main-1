import TextField from "@mui/material/TextField";
import { Box, Button, Card, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { StateContext } from "@/utils/StateContext";

const CreateProject = ({
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
    <Box display="flex" gap="16px">
      <TextField
        fullWidth
        size="small"
        label="Name"
        value={name}
        onChange={onChange}
      />
      <Button
        onClick={onClick}
        variant="contained"
        size="small"
        color="primary"
      >
        {isLoading ? "..." : "Create"}
      </Button>
    </Box>
  );
};

export default CreateProject;
