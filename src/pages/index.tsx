import { Box } from "@mui/material";
import Table from "@/components/Table";

export default function Home() {
  return (
    <Box
      display="flex"
      my="150px"
      mx="auto"
      width="80%"
      alignItems="center"
      justifyContent="center"
    >
      <Table />
    </Box>
  );
}
