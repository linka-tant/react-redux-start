export const SUCCESS_RECIEVE_TRANSACTIONS = "SUCCESS_RECIEVE_TRANSACTIONS";
export const ERROR_RECIEVE_TRANSLATIONS = "ERROR_RECIEVE_TRANSLATIONS";

export function fetch_transactions() {
  return (dispatch) => {
    return fetch('http://localhost:3000/data/transactions.json')
      .then(response => response.json())
      .then(json => {
        dispatch(receive_transactions(json));
      });
  }
}

export const receive_transactions = (transactions) => {
  return {
    type: SUCCESS_RECIEVE_TRANSACTIONS,
    transactions
  }
}
