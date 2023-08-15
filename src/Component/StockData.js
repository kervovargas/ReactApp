import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const StockData = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [stockData, setStockData] = useState(null);

  const fetchStockData = async () => {
    try {
      const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;
      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${apiKey}`;
      const response = await axios.get(url);
      setStockData(response.data['Global Quote']);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h5">Stock Data App</Typography>
      <TextField
        label="Enter stock symbol"
        value={stockSymbol}
        onChange={(e) => setStockSymbol(e.target.value)}
        variant="outlined"
        style={{ marginBottom: '10px' }}
      />
      <Button variant="contained" onClick={fetchStockData}>
        Fetch Stock Data
      </Button>
      {stockData && (
  <div style={{ marginTop: '20px' }}>
    <Typography variant="h6">Symbol: {stockData['01. symbol']}</Typography>
    <Typography>Open: {stockData['02. open']}</Typography>
    <Typography>High: {stockData['03. high']}</Typography>
    <Typography>Low: {stockData['04. low']}</Typography>
    <Typography>Price: {stockData['05. price']}</Typography>
    <Typography>Volume: {stockData['06. volume']}</Typography>
    <Typography>Last Trading Day: {stockData['07. latest trading day']}</Typography>
  </div>
)}

    </Paper>
  );
};

export default StockData;