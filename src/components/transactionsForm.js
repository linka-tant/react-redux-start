import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_banks } from '../action_creators/banks';
import { fetch_transactions, add_transaction } from '../action_creators/transactions';
import { checkData } from '../helpers';


import Navigation from './navigation';

class TransactionsForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      bankId : 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    checkData(this.props.banks, dispatch, fetch_banks);
    checkData(this.props.transactions, dispatch, fetch_transactions);
  }

  componentWillReceiveProps(newProps){
     if(!this.state.bankId){
       if(newProps.banks[0]) this.setState({ bankId: newProps.banks[0].id });
     }
  }

  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(e){
    e.preventDefault();
    const { dispatch } = this.props
    const transactionsLength = this.props.transactions.length ? this.props.transactions.length + 1 : 1
    const data = {
      bankId: this.state.bankId,
      amount: this.state.amount,
      id: transactionsLength
    }
    dispatch(add_transaction(data));
    alert('Transaction added.');
    e.target.reset();
  }

  render(){
    return(
      <div>
        <Navigation />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form_block">
            <label className="form_label">List of banks</label>
            <select className="form_select" name="bankId" onChange={this.handleChange}>
              {this.props.banks ? this.props.banks.map((item) => (
                    <option value={item.id} key={item.id}>{item.title}</option>
                  )) : null}
            </select>
          </div>
          <div className="form_block">
            <label className="form_label" htmlFor="amount">Amount</label>
            <input type="number" required className="form_input" id="amount" name="amount" onChange={this.handleChange} />
          </div>
          <button type="submit" className="form_submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
    return {
        banks: store.banks,
        transactions: store.transactions
    };
};

export default connect(mapStateToProps)(TransactionsForm);
