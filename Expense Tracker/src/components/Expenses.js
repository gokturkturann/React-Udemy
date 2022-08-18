import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return props.items.map(({ title, amount, date }) => (
    <ExpenseItem title={title} amount={amount} date={date} />
  ));
}

export default Expenses;
