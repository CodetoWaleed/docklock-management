import React, { useEffect, useRef } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  Plugin,
  Chart,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

interface CardProps {
  title: string;
  value: string;
  percentage?: string;
  isPositive?: boolean;
  isChart?: boolean;
  chartData?: number[];
  chartLabels?: string[];
  chartColor?: string;
  doughnutData?: number[];
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  percentage,
  isPositive,
  isChart,
  chartData,
  chartLabels,
  chartColor,
  doughnutData,
}) => {
  const chartRef = useRef<Chart<"line">>(null);

  const getChartColor = () => {
    switch (title) {
      case "Total Appointments":
        return "#36B5FF";
      case "Total Doctors":
        return "#F03738";
      case "Total Wards":
        return "#FBBC04";
      default:
        return "#36B5FF";
    }
  };

  const selectedChartColor = chartColor || getChartColor();

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(
      0,
      chart.chartArea.bottom,
      0,
      chart.chartArea.top
    );
    gradient.addColorStop(0, `${selectedChartColor}33`); // Semi-transparent at bottom
    gradient.addColorStop(1, `${selectedChartColor}00`); // Transparent at top

    // Update the dataset with the gradient
    chart.data.datasets[0].backgroundColor = gradient;
    chart.update();
  }, [selectedChartColor, chartData, chartLabels]);

  const lineChartData: ChartData<"line"> = {
    labels: chartLabels || ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: chartData || [65, 59, 80, 81, 56, 55],
        borderColor: selectedChartColor,
        backgroundColor: selectedChartColor, // Will be updated by useEffect
        fill: true, // Fill the area under the line
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const lineChartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        display: false,
        grid: { display: false },
      },
      y: {
        display: false,
        grid: { display: false },
        beginAtZero: true,
      },
    },
    elements: {
      line: {
        borderCapStyle: "round",
      },
    },
  };

  const doughnutChartData: ChartData<"doughnut"> = {
    labels: ["Female", "Male"],
    datasets: [
      {
        data: doughnutData || [110, 87],
        backgroundColor: ["#36B5FF", "#F03738"],
        borderWidth: 0,
      },
    ],
  };

  const doughnutTextPlugin: Plugin<"doughnut"> = {
    id: "doughnutText",
    afterDraw: (chart) => {
      const { ctx, chartArea } = chart;
      const { width, height } = chartArea;
      const centerX = width / 2 + chartArea.left;
      const centerY = height / 2 + chartArea.top;

      ctx.save();
      ctx.font = "14px Arial";
      ctx.fillStyle = "#36B5FF";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("110 Female", centerX, centerY - 10);
      ctx.font = "14px Arial";
      ctx.fillStyle = "#F03738";
      ctx.fillText("87 Male", centerX, centerY + 10);
      ctx.restore();
    },
  };

  const doughnutChartOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    cutout: "70%",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-4 justify-between">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        {!isChart && <img src="/arrow-right-yellow.svg" alt="" />}
      </div>

      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-[32px] font-bold text-gray-700 mt-1">{value}</p>
          {percentage && (
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`flex items-center justify-center rounded-full p-1 ${
                  isPositive ? "bg-tertiary-green" : "bg-red"
                }`}
              >
                <img
                  src={isPositive ? "/arrow-up.svg" : "/arrow-down.svg"}
                  alt=""
                  className="h-2 w-2"
                />
              </span>
              <p
                className={`text-xs ${
                  isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {percentage}
              </p>
            </div>
          )}
        </div>
        <div className="w-[114px] h-[114px] relative">
          {isChart ? (
            <Doughnut
              data={doughnutChartData}
              options={doughnutChartOptions}
              plugins={[doughnutTextPlugin]}
            />
          ) : (
            <Line
              ref={chartRef}
              data={lineChartData}
              options={lineChartOptions}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

// import React from "react";
// import { Line, Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Tooltip,
//   Legend,
//   ChartData,
//   ChartOptions,
// } from "chart.js";

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Tooltip,
//   Legend
// );

// interface CardProps {
//   title: string;
//   value: string;
//   percentage?: string;
//   isPositive?: boolean;
//   isChart?: boolean;
//   chartData?: number[]; // For line chart data
//   chartLabels?: string[]; // For line chart labels
//   chartColor?: string; // For line chart color
//   doughnutData?: number[]; // For doughnut chart data
// }

// const Card: React.FC<CardProps> = ({
//   title,
//   value,
//   percentage,
//   isPositive,
//   isChart,
//   chartData,
//   chartLabels,
//   chartColor,
//   doughnutData,
// }) => {
//   // Line chart configuration
//   const lineChartData = {
//     labels: chartLabels || ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         data: chartData || [65, 59, 80, 81, 56, 55],
//         borderColor: chartColor || "#36B5FF",
//         backgroundColor: `${chartColor || "#36B5FF"}33`, // Add transparency
//         fill: true,
//         tension: 0.4,
//         borderWidth: 2,
//         pointRadius: 0, // Hide points
//       },
//     ],
//   };

//   const lineChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: false },
//     },
//     scales: {
//       x: { display: false },
//       y: { display: false },
//     },
//   };

//   // Doughnut chart configuration
//   const doughnutChartData: ChartData<"doughnut"> = {
//     labels: ["Female", "Male"],
//     datasets: [
//       {
//         data: doughnutData || [110, 87],
//         backgroundColor: ["#36B5FF", "#F03738"],
//         borderWidth: 0,
//       },
//     ],
//   };

//   // Custom plugin to add text inside the doughnut chart
//   const doughnutTextPlugin = {
//     id: "doughnutText",
//     afterDraw: (chart: ChartJS) => {
//       const { ctx, chartArea } = chart;
//       const { width, height } = chartArea;
//       const centerX = width / 2 + chartArea.left;
//       const centerY = height / 2 + chartArea.top;

//       ctx.save();

//       // Draw "110 Female" a little closer above
//       ctx.font = "14px Arial";
//       ctx.fillStyle = "#36B5FF"; // Blue for Female
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.fillText("110 Female", centerX, centerY - 10); // was -30

//       // Draw "87 Male" a little closer below
//       ctx.font = "14px Arial";
//       ctx.fillStyle = "#F03738"; // Red for Male
//       ctx.fillText("87 Male", centerX, centerY + 10); // was +30

//       ctx.restore();
//     },
//   };

//   const doughnutChartOptions: ChartOptions<"doughnut"> = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: false },
//     },
//     cutout: "70%", // Makes it a thin ring
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-4 justify-between">
//       <div className="flex flex-row items-center justify-between">
//         <h3 className="text-lg font-medium">{title}</h3>
//         {isChart ? null : <img src="/public/arrow-right-yellow.svg" alt="" />}
//       </div>

//       <div className="flex flex-row gap-2 justify-between">
//         <div className="flex flex-col gap-4">
//           <p className="text-[32px] font-bold text-gray-700 mt-1">{value}</p>
//           {percentage && (
//             <div className="flex items-center gap-2 mt-1">
//               <span
//                 className={`flex items-center justify-center rounded-full p-1 ${
//                   isPositive ? "bg-tertiary-green" : "bg-red"
//                 }`}
//               >
//                 <img
//                   src={isPositive ? "/arrow-up.svg" : "/arrow-up.svg"}
//                   alt={isPositive ? "arrow up" : "arrow down"}
//                   className="h-2 w-2"
//                 />
//               </span>
//               <p
//                 className={`text-xs ${
//                   isPositive ? "text-green-500" : "text-red-500"
//                 }`}
//               >
//                 {percentage}
//               </p>
//             </div>
//           )}
//           <span></span>
//         </div>
//         <div className="w-[114px] h-[114px]">
//           {isChart ? (
//             <Doughnut
//               data={doughnutChartData}
//               options={doughnutChartOptions}
//               plugins={[doughnutTextPlugin]}
//             />
//           ) : (
//             <Line data={lineChartData} options={lineChartOptions} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
