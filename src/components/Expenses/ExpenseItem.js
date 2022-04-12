import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';


function ExpenseItem(props){

    // const [title,setTitle] = useState(props.title);
    // const clickHandler = () =>{
    //         setTitle("Updated");
    //         console.log("Clicked!");
    // };

    return (
       <Card className="expense-item">
           <div className="expense-item__description">
               <ExpenseDate data={props.date}></ExpenseDate>
               <h2>{props.title}</h2>
               <div className="expense-item__price">{props.amount}</div>
           </div>
        {/* <button onClick={clickHandler}>Click Me!!!</button> */}
       </Card>
    );
}


export default ExpenseItem;