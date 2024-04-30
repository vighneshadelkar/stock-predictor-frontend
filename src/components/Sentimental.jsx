import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function Sentimental() {
    const [senti, setsenti] = useState([]);
    const [error, setError] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const getPoints = async (retryCount = 0) => {
            try {
                const response = await fetch(
                    `http://127.0.0.1:8000/api/stockanalysis/${id}/`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                if (result) {
                    setsenti(result);
                } else {
                    throw new Error("No time series data found");
                }
            } catch (e) {
                console.error("There was an error fetching the stock data", e);
                setError(e.message);
            }
        };
        getPoints();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!senti.length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>SENTIMENTAL ANALYSIS</h3>
            <table className="stock-table">
                <tbody>
                <th>Information </th>
                <th>Label </th>
                <th>Score </th>
                {senti.map((item, index) => (
                    <tr key={index}>
                        <td>{item.sentences}</td> 
                        <td>{item.label}</td>
                        <td> {item.score}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ul>
                
            </ul>
        </div>
    );
}
