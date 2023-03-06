import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc'
import { arrayMoveImmutable } from "array-move";
import { Card } from 'antd';
import { useState } from 'react';


// const DragHandle = SortableHandle(() => (
//   <MenuOutlined style={{ cursor: "grab", color: "#999" }} />
// ));

const SortableItem = SortableElement((value) => {
  return (
    <Card
      hoverable
      style={{
      }}
      className='Dragable-Cards'
    >
      <p>{value.value}</p>
    </Card>
  );
})

const Container = SortableContainer((items) => {

  return (
    <div className='Drable-Habit_list'>
      {
        items.items.map(
          (item, index) => {
            return (<SortableItem key={item} index={index} value={item} />)
          }
        )
      }
    </div>
  )
});


const HabitListDragable = () => {

  const [items, setItems] = useState(['Habit 1', 'Habit 2', 'Habit 3', 'Habit 4', 'Habit 5', 'Habit 6']);

  const onSortEnd = (oldIndex, newIndex) => {
    setItems( arrayMoveImmutable(items, oldIndex.oldIndex, newIndex.newIndex) );
  };

  return (
    <Container items={items} onSortEnd={onSortEnd} />
  );
}



export default HabitListDragable;