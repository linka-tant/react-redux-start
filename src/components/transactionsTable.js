import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_transactions } from 'action_creators/transactions';
import { fetch_banks } from 'action_creators/banks';
import { checkData } from 'helpers';
import _ from 'lodash';


class TransactionsTable extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetch_transactions());
    if(this.props.transactions.length){
      checkData(this.props.banks, dispatch, fetch_banks);
    }
  }

  componentWillReceiveProps(newProps){
    const { dispatch } = this.props
    if(newProps.transactions.length && _.isEmpty(this.props.banks)){
      checkData(this.props.banks, dispatch, fetch_banks);
    }
  }

  render(){
    return(
      <div>
        <table className="table">
          <tbody>
            {this.props.transactions.length && !(_.isEmpty(this.props.banks)) ? this.props.transactions.map((item) => (
              <tr key={item.id} className="table_tr">
                <td className="table_td">{item.id}</td>
                <td className="table_td">{this.props.banks[item.bankId].title}</td>
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
