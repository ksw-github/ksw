import { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';

const GridLayout = WidthProvider(Responsive);

export default function DnD() {
  const [layout, setLayout] = useState<{ i: string; x: number; y: number; w: number; h: number; }[]>([
    { i: 'a', x: 0, y: 0, w: 6, h: 0.5 },
    { i: 'b', x: 0, y: 1, w: 1, h: 3 },
    { i: 'c', x: 5, y: 1, w: 1, h: 3 },
    { i: 'd', x: 1, y: 5, w: 6, h: 1 },
  ]);

  const onLayoutChange = (layout) => {
    setLayout(layout);
  };

  return (
    <>
      <GridLayout
      className="layout"
      layouts={{ lg: layout }}
      onLayoutChange={onLayoutChange}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
      cols={{ lg: 6, md: 6, sm: 6, xs: 6 }}
      >
      <div key="a" className="box" style={{ backgroundColor: '#ff8c00' }}>
        <h2>A</h2>
      </div>
      <div key="b" className="box" style={{ backgroundColor: '#ff6347' }}>
        <h2>B</h2>
      </div>
      <div key="c" className="box" style={{ backgroundColor: '#32cd32' }}>
        <h2>C</h2>
      </div>
      <div key="d" className="box" style={{ backgroundColor: '#1e90ff' }}>
        <h2>D</h2>
      </div>
      </GridLayout>
    </>
  )
}