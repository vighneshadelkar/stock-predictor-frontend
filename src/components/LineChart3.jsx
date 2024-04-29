import * as React from 'react';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

const mockData = [
  { date: "2024-04-01", value: 4000 },
  { date: "2024-04-02", value: 3000 },
  { date: "2024-04-03", value: 2000 },
  { date: "2024-04-04", value: 1890  },
  { date: "2024-04-05", value: 1890 },
  { date: "2024-04-06", value: 2390 },
  { date: "2024-04-07", value: 3490 },
  { date: "2024-04-08", value: 4200 },
  { date: "2024-04-09", value: 3100 },
  { date: "2024-04-10", value: 2200 },
  { date: "2024-04-11", value: 1890  },
  { date: "2024-04-12", value: 1890 },
  { date: "2024-04-13", value: 2390 },
  { date: "2024-04-14", value: 3490 },
  { date: "2024-04-15", value: 4000 },
  { date: "2024-04-16", value: 3000 },
  { date: "2024-04-17", value: 2000 },
  { date: "2024-04-18", value: 1890  },
  { date: "2024-04-19", value: 1890 },
  { date: "2024-04-20", value: 2390 },
  { date: "2024-04-21", value: 3490 },
  { date: "2024-04-22", value: 4000 },
  { date: "2024-04-23", value: 3000 },
  { date: "2024-04-24", value: 2000 },
  { date: "2024-04-25", value: 1890  },
  { date: "2024-04-26", value: 1890 },
  { date: "2024-04-27", value: 2390 },
  { date: "2024-04-28", value: 3490 },
  { date: "2024-04-29", value: 4000 },
  { date: "2024-04-30", value: 3000 },
];


export default function LineChartConnectNulls() {
  const dates = mockData.map(item => item.date);
  const values = mockData.map(item => item.value);

  console.log(dates)

  return (
    <Stack sx={{ width: '100%' }}>
      <LineChart
        xAxis={[{ data: dates, scaleType: 'point' }]}
        series={[{ data: values }]}
        height={200}
        margin={{ top: 10, bottom: 20 }}
      />
    </Stack>
  );
}
