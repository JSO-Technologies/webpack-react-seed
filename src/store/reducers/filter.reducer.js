import { CHANGE_FILTER } from '../actions/filter.actions';
import { ALL } from '../actions/filter.actions';

export function filter(state = ALL, action = {}) {
    switch (action.type) {
        case CHANGE_FILTER:
            return action.filter;

        default:
            return state;
    }
}