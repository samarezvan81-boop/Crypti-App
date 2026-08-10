import { useState } from "react";
import { converData } from "../../helpers/convertData";
import styled from "./chart.module.css";
import {

  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  
}

from "recharts";

  function Chart({ chart, setChart,currency }){
  const [type, setType] = useState("prices");

  if (!chart) return null;

  return (
    <div className={styled.container}>
      <div className={styled.chart}>
        <span className={styled.cross} onClick={() => setChart(null)}>
          X
        </span>
        <div className={styled.name}>
          <img src={chart.coin.image} alt={chart.coin.name} />
          <p>{chart.coin.name}</p>
        </div>

        <div className={styled.gragh}>
          <div className={styled.chartArea}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={converData(chart, type)}>
                <Line
                  type="monotone"
                  dataKey={type}
                  stroke="#3874ff"
                  strokeWidth={2}
                />
                <CartesianGrid stroke="#404042" />
                <YAxis domain={["auto", "auto"]} />
                <XAxis dataKey="date" hide />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className={styled.types}>
            <button className={type==="prices" ? styled.selected:null}  onClick={() => setType("prices")} >Price</button>
            <button className={type==="market_caps" ? styled.selected:null} onClick={() => setType("market_caps")}>Market Caps</button>

  <button
    className={type === "total_volumes" ? styled.selected : null}onClick={() => setType("total_volumes")}>
    Total Volumes
  </button>          
  </div>

          <div className={styled.details}>
            <div>
              <p>Price:</p>
              <span>${chart.coin.current_price}</span>
            </div>
            <div>
              <p>ATH:</p>
              <span>${chart.coin.ath}</span>
            </div>
            <div>
              <p>Market Cap:</p>
              <span>${chart.coin.market_cap}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chart;