import React, { Component } from 'react';
import ExpenseForm from './expense-form';
import ExpenseDisplay from './expense-display'
//import SingleInput from './single-input'
//import logo from './logo.svg';
import './App.css';

//App Componenet is our root component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenses: [],
      // amount:document.getElementById("amt").value,
      // category:document.getElementById("cat").value,
      // description:document.getElementById("descr").value
    };
    this.addExpense = this.addExpense.bind(this);
  }
  addExpense(expense) {
    // let expense = {
    //   amt: document.getElementById("amt").value,
    //   cat: document.getElementById("cat").value,
    //   descr: document.getElementById("descr").value
    // }
    //reset the input values to nothing
    // document.getElementById("amt").value = ""
    // document.getElementById("cat").value = ""
    // document.getElementById("descr").value = ""
    //update the state with the new info using setState
    this.setState({
      expenses: this.state.expenses.concat(expense)
    });
    //this.state.expenses.push(expense); -->this is like the above line
    //console.log(this.state.expenses)
  }

  render() {
    return (
      <div className="App">
        {/* <SingleInput title inputType="number" id="amt" placeholder="$"/>
        <SingleInput title inputType="text" id="cat" placeholder="Category"/>
        <SingleInput title inputType="text" id="descr" placeholder="Description"/>
        <button className="button" onClick={this.addExpense}> Add Expense </button> */}
        <ExpenseForm addExp={this.addExpense} />

        <ExpenseDisplay expenses={this.state.expenses} />
        

      </div>
    );
  }
}

export default App;
