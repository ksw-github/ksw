import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DnDItem from './DnDItem';

export default function DnD() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='flex justify-around p-12'>
        <DnDItem />
      </div>
    </DndProvider>
  )
}