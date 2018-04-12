import React, { Component } from 'react';
import SingleInput from './single-input'

class ExpenseForm extends Component {
    constructor(props) {
        super(props)
        this.changeExpense = this.changeExpense.bind(this);
        this.addExpense = this.addExpense.bind(this);
        this.state = {
            amt: '',
            cat: '',
            descr: ''
        }
    }
    //handles each update of the expense
    changeExpense(e) {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.value)
        this.setState({ [e.target.id]: e.target.value})
    }
    addExpense() {
        this.props.addExp(this.state);
        this.setState({amt:'',cat:'', descr:''});
        //console.log(this.state)
    }
    render() {
        return (
            <div>
                <SingleInput class="inputs" title="amount" type="number" id="amt" placeholder="$" content={this.state.amt} controlFunc={this.changeExpense} />
                <SingleInput class="inputs" title="category" type="text" id="cat" placeholder="Category" content={this.state.cat} controlFunc={this.changeExpense} />
                <SingleInput class="inputs" title="description" type="text" id="descr" placeholder="Description" content={this.state.descr} controlFunc={this.changeExpense} />
                <button className="button" onClick={this.addExpense} >Add Expense</button>
            </div>
        );
    }
}

export default ExpenseForm;