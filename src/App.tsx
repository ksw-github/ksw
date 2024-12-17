import BarChart from './components/BarChart'
import DoughnutChart from './components/Doughnut'
import LineChart from './components/LineChart'
import DnD from './components/DnD'
import GridLayout from './components/GridLayout'
import './global.css'

function App() {

  return (
    <>
      <h1 className='text-white'>통계그래프(ChartJS)</h1>
      <BarChart />
      <br/>
      <DoughnutChart />
      <br/>
      <LineChart />
      <hr/>
      <h1 className='text-white'>커스텀 레이아웃(GridLayout)</h1>
      <GridLayout />
      <hr/>
      <h1 className='text-white'>커스텀 레이아웃(DnD)</h1>
      <DnD />
      <hr/>
    </>
  )
}

export default App