import ExpensesList from './ExpensesList'
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import {useState} from 'react';
import ExpensesChart from './ExpensesChart';

function Expenses(props){
  const [filteredYear,setFilteredYear] = useState('2020');
     const filterChangeHandler = (selectedYear) =>{
  
  setFilteredYear(selectedYear);
  //console.log(selectedYear);

};
const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});



return (
  <li>
     <div>
    <Card className="expenses">
    <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
    </li>
);

}

export default Expenses;