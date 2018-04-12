import React, { Component } from 'react';
import Expense from './expense'
// import SingleInput from './single-input'


class ExpenseDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expenses: this.props.expenses
        }
    }
    renderExpenses = (expenses) => {
        return expenses.map((expense, index) => <Expense removeExp={this.removeExpense} editExp={this.editExpense} id={index} key={index} {...expense} />)

        // return expenses.map((expense, index) =>
        //  <li key={index}>Amount: {expense.amt} | 
        //  Category: {expense.cat.toString} | 
        //  Description: {JSON.stringify(expense.descr)}
        //  new : {JSON.stringify(expense.newElem)}</li>)


        //return this.props.expenses.map((expense, index) => <li key={index}>{JSON.stringify(expense)}</li>);

    }
    removeExpense = (index) => {
        this.props.expenses.splice(index, 1)
        this.setState({ expenses: this.props.expenses })
    }
    /*--extension to make each expense editable - attempt
    editExpense = (index) => {
        return (
            <div>
                <SingleInput type="number" id="newAmount" placeholder="new amount" />
                <SingleInput type="number" id="newCat" placeholder="new category" />
                <SingleInput type="number" id="newDescr" placeholder="new description" />
                <button onClick={this.updateExpense}>Done</button>
            </div>
        );
    }
    updateExpense = () => {
        console.log(this.props.expenses.indexOf(expense));

       console.log(this.props.expenses) 
        //this.setState({[expenses[id==index]]: })
        
    }
    */
    render() {
        return (
            <div>
                <br />
                Expenses:
                {this.renderExpenses(this.props.expenses)}
            </div>
        );
    }
}

export default ExpenseDisplay;