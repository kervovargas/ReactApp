import '../styles/StockData.css';
import StockDataTable from './StockDataTable'; 
import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StockDataRenderer from './StockDataRenderer';


 
const StockData = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [stockData, setStockData] = useState(null);

  const fetchStockData = async () => {
    try {
      const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;
      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${apiKey}`;
      const response = await axios.get(url);
      setStockData(response.data['Global Quote']);
      console.log(response.data)

      // Destructuring
      /*
      var person = {first: "Ulysses", last: "Ludwig", phone: "408.621.7659"}
      const { phone } = person;
      console.log(phone);
      */

    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <Paper elevation={3} className="stock-data-container" style={{ backgroundColor: '#f4f4f4' }}>
      <Typography variant="h5" className="app-title">Stock Data App</Typography>
      <TextField
        label="Enter stock symbol"
        value={stockSymbol}
        onChange={(e) => setStockSymbol(e.target.value)}
        variant="outlined"
        className="input-field"
      />
      <Button variant="contained" className="fetch-button" onClick={fetchStockData}>
        Fetch Stock Data
      </Button>
      {stockData && (
        <><StockDataTable stockData={setStockData} /><StockDataRenderer stockData={stockData} /></>
      )}
    </Paper>
  );
};

export default StockData;