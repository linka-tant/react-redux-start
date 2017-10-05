import { SUCCESS_RECIEVE_BANKS } from '../action_creators/banks';

export function banks(state = [], action) {
    switch (action.type) {
        case SUCCESS_RECIEVE_BANKS:
            return action.banks;
        default:
            return state;
    }
}
