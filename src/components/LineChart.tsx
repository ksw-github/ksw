import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

//기본 Line 차트
//https://react-chartjs-2.js.org/examples/line-chart

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {

  const labels = ["January","February","March","April","May","July"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'A',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'B',
        data: [60, 65, 70, 75, 60, 59, 43],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'C',
        data: [69, 50, 75, 85, 59, 57, 45],
        fill: false,
        borderColor: 'rgb(255, 205, 86)',
        tension: 0.1
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  return (
    <Line options={config.options} data={data} />
  );
}