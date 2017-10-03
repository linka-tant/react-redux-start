import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_transactions } from '../action_creators/transactions';

class TransactionsTable extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetch_transactions());
  }

  render(){
    return(
      <table className="table">
        <tbody>
          {this.props.transactions ? this.props.transactions.map((item) => (
                <tr key={item.id} className="table_tr">
                  <td className="table_td">{item.id}</td>
                  <td className="table_td">{item.bankId}</td>
                  <td className="table_td">{item.amount}</td>
                </tr>
              )) : null}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions
    };
};

export default connect(mapStateToProps)(TransactionsTable);
