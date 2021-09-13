import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";

import { Chart } from "chart.js";

import ChartStreaming from "chartjs-plugin-streaming";
import { StreamingPlugin } from "chartjs-plugin-streaming";
Chart.register(ChartStreaming, StreamingPlugin);

const data = {
  datasets: [
    {
      label: "Student Performance",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      lineTension: 0,
      borderDash: [8, 4],
      data: [],
    },
  ],
};

// const onRefresh = chart => {
//     const now = Date.now();
//     chart.data.datasets.forEach(dataset => {
//       dataset.data.push({
//         x: now,
//         y: Utils.rand(-100, 100),
//         r: +Utils.rand(5, 15).toFixed(2)
//       });
//     });
//   };

const options = {
  scales: {
    xAxes: [
      {
        type: "realtime",
        realtime: {
          duration: 20000, // data in the past 20000 ms will be displayed
          refresh: 1000, // onRefresh callback will be called every 1000 ms
          delay: 1000,
          onRefresh: (chart) => {
            chart.data.datasets[0].data.push({
              x: Date.now(),
              y: Math.random() * 100,
            });
          },
          //   delay: 2000,
        },
      },
    ],
  },
};

class LineChart extends React.Component {
  render() {
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default LineChart;

// export default createReactClass({
//   displayName: "LineExample",
//   render() {
//     return (
//       <div>
//         <Line data={data} options={options} />
//       </div>
//     );
//   }
// });
