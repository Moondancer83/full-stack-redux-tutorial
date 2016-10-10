/**
 * Created by mkalinovits on 10/10/16.
 */

import {List} from 'immutable';

export function setEntries(state, entries) {
    return state.set('entries', List(entries));
}
