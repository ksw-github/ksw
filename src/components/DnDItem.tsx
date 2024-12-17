// import { useDrag } from 'react-dnd';

// function DnDItem({ id }) {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: 'ITEM',
//     item: { id },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   return (
//     <>
//       <div ref={drag} className={`${isDragging ? 'bg-green-950' : 'bg-gray-700'} p-5 m-2 cursor-move rounded-md`}>
//         아이템
//       </div>
//     </>
//   );
// }

// export default DnDItem;

import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'ITEM';
const colors = [
  'bg-gray-900 text-gray-500',
  'bg-gray-800 text-gray-500',
  'bg-gray-700 text-gray-500',
  'bg-gray-600',
  'bg-gray-500',
  'bg-gray-400',
  'bg-gray-300',
  'bg-gray-200',
  'bg-gray-100',
];

// 아이템
function DraggableItem({ id, moveItem, color, isDragging }) {
  const [, drag] = useDrag(() => ({
    type: ItemType,
    item: { id },
    // collect: (monitor) => ({
    //   isDragging: monitor.isDragging(),
    // }),
  }));

  return (
    <div
      ref={drag}
      className={`${color} w-24 h-24 flex justify-center items-center border-2 border-gray-400 bg-lightblue cursor-move`}
    >
      {id}
    </div>
  );
}

// 드롭영역
function DropTarget({ id, moveItem, children }) {
  const [, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item) => moveItem(item.id, id),
  }));

  return (
    <div 
    ref={drop}
    className={`min-w-[100px] min-h-[100px] w-24 h-24 border-2 border-dashed border-gray-400`}>
      {children}
    </div>
  );
}

// 전체 레이아웃
function DnDLayout() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // 이동 함수
  const moveItem = (fromId, toId) => {
    const updatedItems = [...items];
    const fromIndex = updatedItems.indexOf(fromId);
    const toIndex = updatedItems.indexOf(toId);
    updatedItems[fromIndex] = toId;
    updatedItems[toIndex] = fromId;
    setItems(updatedItems);
  };

  // const [, drop] = useDrop(() => ({
  //   accept: ItemType,
  //   drop: (item) => moveItem(item.id, item.targetId),
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //     canDrop: monitor.canDrop(),
  //   }),
  // }));

  return (
    <div 
    // ref={drop} 
    className="grid grid-cols-3 gap-2">
      {/* 9칸 그리드에 드래그 가능한 아이템을 추가 */}
      {items.map((id, index) => (
        <DropTarget key={id} id={id} moveItem={moveItem}>
          <DraggableItem id={id} moveItem={moveItem} color={colors[index]} />
        </DropTarget>
      ))}
    </div>
  );
}

export default DnDLayout;