import React, { Component } from 'react';
//import SingleInput from './single-input'

class Expense extends Component {
    removeExpense = () => {
        this.props.removeExp(this.props.id);
    }

    editExpense = () => {
        this.props.editExp(this.props.id);
    }
    render() {
        return (
            <div className="expense">
                <div className="expensePart"><strong>Amount:</strong> ${this.props.amt}</div>
                <div className="expensePart"><strong>Category:</strong> {this.props.cat}</div>
                <div className="expensePart"><strong>Decription:</strong> {this.props.descr}</div>
                <button className="deleteButton" id={this.props.id} onClick = {this.removeExpense}> Delete </button>
                <button className="editButton" id={this.props.id} onClick = {this.editExpense}> Edit </button>                
            </div>
        );
    }
}

export default Expense;