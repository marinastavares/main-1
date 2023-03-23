import { Inter } from "next/font/google";
import Form from "@/components/Form";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      display="flex"
      my="150px"
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Form />
    </Box>
  );
}
