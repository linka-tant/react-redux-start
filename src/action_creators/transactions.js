export const SUCCESS_RECIEVE_TRANSACTIONS = "SUCCESS_RECIEVE_TRANSACTIONS";
export const ERROR_RECIEVE_TRANSACTIONS = "ERROR_RECIEVE_TRANSACTIONS";
export const ADD_TRANSACTION = "ADD_TRANSACTIONS";


export function fetch_transactions() {
  return (dispatch) => {
    // return fetch(`http://${window.location.host}/data/transactions.json`)
    //   .then(response => response.json())
    //   .then(json => {
    //     dispatch(receive_transactions(json));
    //   });
    if(localStorage.getItem('transactions')){
      let arr = JSON.parse(localStorage.getItem('transactions'));
      dispatch(receive_transactions(arr))
    }
    return [];
  }
}

export const receive_transactions = (transactions) => {
  return {
    type: SUCCESS_RECIEVE_TRANSACTIONS,
    transactions
  }
}

export const add_transaction = (data) => {
  let transactions = [];
  if(localStorage.getItem('transactions')){
    const local = localStorage.getItem('transactions');
    transactions = JSON.parse(local);
  }
  data["id"] = transactions.length + 1;
  transactions.push(data);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  return {
    type: ADD_TRANSACTION,
    data
  }
}
