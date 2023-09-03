
import React from "react";
import moment from "moment";
import { Typography } from "@mui/material";
import '../styles/StockData.css';

const StockDataRenderer = ({ stockData }) => {
    console.log(stockData);
  return (
    <div className="stock-info">
      <Typography variant="h6">Symbol: {stockData['01. symbol']}</Typography>
      <Typography>Open: {stockData['02. open']}</Typography>
      <Typography>High: {stockData['03. high']}</Typography>
      <Typography>Low: {stockData['04. low']}</Typography>
      <Typography>Price: {stockData['05. price']}</Typography>
      <Typography>Volume: {stockData['06. volume']}</Typography>
      <Typography>Last Trading Day: {moment(stockData['07. latest trading day']).format("MMMM d, YYYY")}</Typography>
    </div>
  );
};

export default StockDataRenderer;
