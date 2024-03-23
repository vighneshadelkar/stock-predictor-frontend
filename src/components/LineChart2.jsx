import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import stockData from "../data/chartData";

export default function LineChart2() {
  const closePrices = stockData.map((item) => item.close_price);
  const dates = stockData.map((item) => item.date);
  const seriesData = [
    {
      name: "AAPL",
      data: closePrices,
    },
  ];

  return (
    <div>
      <LineChart
        categories={dates}
        series={seriesData}
        width={745}
        height={438}
      />
    </div>
  );
}
