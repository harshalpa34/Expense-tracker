import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointsValues = props.datapoints.map(datapoint => datapoint.value)
    const totalMaximun = Math.max(...dataPointsValues)
    return (
        <div className="chart">
            {props.datapoints.map(datapoint => {
                return(
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={totalMaximun}
                    label={datapoint.label}
                />
                )

            })}
        </div>
    )

}


export default Chart;