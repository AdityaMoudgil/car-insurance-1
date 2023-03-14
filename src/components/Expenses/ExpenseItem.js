import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  //Imperative Way of adding Event Listener
  // document.getElementById('root').addEventListener()

  const [title, setTitle] = useState(props.title);
  //useState return an array[original element, updated element]

  //let title = props.title;

  const clickHandler = () => {
    setTitle('Updated!!');
    //title = 'Updated';
    console.log(title);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={() => {console.log('Clicked')}}>Change Title</button> */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
