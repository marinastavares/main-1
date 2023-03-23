import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "./TableRow";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const TableContent = () => {
  const rows = [
    {
      name: "Test",
      id: 1,
    },
  ];
  return (
    <Box minWidth="600px" width="100%" display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between">
        <Typography mb="24px" variant="h3" component="h1">
          Ursa Minor Models
        </Typography>
        <Button size="large" LinkComponent={Link} href="/create">
          Create model
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="left" width="20px" />
              <TableCell align="left">Model name</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              // @ts-ignore
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableContent;
