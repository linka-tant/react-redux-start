import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_transactions } from '../action_creators/transactions';
import { fetch_banks } from '../action_creators/banks';
import { checkData } from '../helpers';

import Navigation from './navigation';

class TransactionsTable extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props
    checkData(this.props.banks, dispatch, fetch_banks);
    checkData(this.props.transactions, dispatch, fetch_transactions);

  }

  findBank(id){
    if(this.props.banks.length){
      const arr = this.props.banks.find((bank) => {
        return bank.id == id;
      });
      return arr.title;
    }
  }

  render(){
    return(
      <div>
        <Navigation />
        <table className="table">
          <tbody>
            {this.props.transactions && this.props.banks ? this.props.transactions.map((item) => (
                  <tr key={item.id} className="table_tr">
                    <td className="table_td">{item.id}</td>
                    <td className="table_td">{this.findBank(item.bankId)}</td>
                    <td className="table_td">{item.amount}</td>
                  </tr>
                )) : null}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
    return {
        transactions: store.transactions,
        banks: store.banks
    };
};

export default connect(mapStateToProps)(TransactionsTable);
