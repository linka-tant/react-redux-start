import { SUCCESS_RECIEVE_TRANSACTIONS } from '../action_creators/transactions';

export function transactions(state = [], action) {
    switch (action.type) {
        case SUCCESS_RECIEVE_TRANSACTIONS:
            return action.transactions;
        default:
            return state;
    }
}
