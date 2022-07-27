import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const totalMaxArray = props.datapoints.map((datapoint) => datapoint.value);
  const totalMax = Math.max(...totalMaxArray);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
