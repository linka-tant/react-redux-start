import { SUCCESS_RECIEVE_BANKS } from 'action_creators/banks';
import mapKeys from 'lodash.mapkeys';

export function banks(state = {}, action) {
  switch (action.type) {
    case SUCCESS_RECIEVE_BANKS:
      const banks = mapKeys(action.banks, 'id');
      return {...state, ...banks };
    default:
      return state;
  }
}
