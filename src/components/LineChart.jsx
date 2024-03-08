import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
} from  'chart.js';
ChartJS.register(LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
    )

const LineChart = () => {
  
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Sample Data',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }
            ]
        };

        const options = {
            scales: {
                y: {
                    type: 'linear',
                    ticks: {
                        beginAtZero: true
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y;
                            }
                            return label;
                        }
                    }
                }
            }
        };
        



    return (
        <div className="chartDiv">
            <div className="chartWrapper">
            <h2>Line Chart Example</h2>
            <Line data={data} options={options} />
            </div>
        </div>
            
        
    );
};

export default LineChart;
