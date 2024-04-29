import * as React from "react";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LineChart2() {
  const [error, setError] = useState("");
  const [stockData, setStockData] = useState([]);
  const { id } = useParams();

  const closePrices = stockData.map((item) => item.close_price);
  const dates = stockData.map((item) => item.date);

  useEffect(() => {
    const getPoints = async (retryCount = 0) => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/stockprice/${id}/?time_step=100&future_date=30`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result) {
          setStockData(result);
        } else {
          throw new Error("No time series data found");
        }
      } catch (e) {
        console.error("There was an error fetching the stock data", e);
        if (retryCount < 3) {
          setTimeout(() => getPoints(retryCount + 1), 10000 * (retryCount + 1));
        } else {
          setError(e.message);
        }
      }
    };
    getPoints();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!stockData.length) {
    return <div>Loading...</div>;
  }

  return (
    <Stack sx={{ width: "100%" }}>
      <LineChart
        xAxis={[{ data: dates, scaleType: "point" }]}
        series={[{ data: closePrices }]}
        height={438}
        width={745}
        margin={{ top: 10, bottom: 20 }}
      />
    </Stack>
  );
}
