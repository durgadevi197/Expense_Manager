import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import {useState} from 'react'

const DUMMY_EXPENSES = [
  {
    id:1,title:'magi',amount:25,date:new Date(2021,2,23),
  },
  {
    id:2,title:'eppi', amount:20, date:new Date(2021,2,12),
  },
  {
    id:3,title:'oats', amount:40, date:new Date(2021,6,24),
  },
  {
    id:4,title:'biscuts', amount:10, date:new Date(2019,6,24),
  }
];


function App() {
   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

   const addExpenseHandler = (expense) =>{
      setExpenses(prevExpense =>{
          return [expense, ...prevExpense];
       } );
   };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
