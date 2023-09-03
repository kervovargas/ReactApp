import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StockDataTable = ({ stockData }) => {
  console.log(stockData);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="stock data table">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell>Open</TableCell>
            <TableCell>High</TableCell>
            <TableCell>Low</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Volume</TableCell>
            <TableCell>Last Trading Day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(stockData).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {key}
              </TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockDataTable;
