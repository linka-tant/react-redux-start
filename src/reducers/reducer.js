import {combineReducers} from 'redux';

import { transactions } from './transactions';
import { banks } from './banks';


export default combineReducers({
    transactions,
    banks
});
