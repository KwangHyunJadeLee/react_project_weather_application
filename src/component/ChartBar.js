import "./ChartBar.css";

// Functional component representing a chart bar.

const ChartBar = (props) => {
  let barFillHeight = "0%";

  // Calculate the bar fill height based on the provided value
  if (props.value > 0) {
    barFillHeight = Math.round(props.value) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* Dynamic style property added using inline style in React */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      {/* Displaying the label for the chart bar */}
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
