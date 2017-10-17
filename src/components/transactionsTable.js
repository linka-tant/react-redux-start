import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_transactions } from 'action_creators/transactions';
import { fetch_banks } from 'action_creators/banks';
import { checkData } from 'helpers';
import isEmpty from 'lodash.isempty';


class TransactionsTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      note: "Loading..."
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetch_transactions());
    checkData(this.props.banks, dispatch, fetch_banks);
  }

  componentWillReceiveProps(newProps){
    if(!newProps.transactions.length){
      this.setState({note : "No transactions"});
    }
  }

  render(){
    return(
      <div>
        <table className="table">
          <tbody>
            {this.props.transactions.length && !(isEmpty(this.props.banks)) ? this.props.transactions.map((item, index) => (
              <tr key={item.id} className="table_tr">
                <td className="table_td">{index + 1}</td>
                <td className="table_td">{this.props.banks[item.bankId].title}</td>
                <td className="table_td">{item.amount}</td>
              </tr>
            )) : <tr><td>{this.state.note}</td></tr>}
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
