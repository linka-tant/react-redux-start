import { SUCCESS_RECIEVE_TRANSACTIONS, ADD_TRANSACTION } from 'action_creators/transactions';

export function transactions(state = [], action) {
  switch (action.type) {
    case SUCCESS_RECIEVE_TRANSACTIONS:
      return action.transactions;
    case ADD_TRANSACTION:
      return [
        ...state,
        {
          id: action.data.id,
          amount: action.data.amount,
          bankId: action.data.bankId
        }
      ];
    default:
      return state;
  }
}
