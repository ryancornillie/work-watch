import { Action } from '@ngrx/store'
import { Record } from './../models/record.model'
import * as RecordActions from './../actions/record.actions'

export function recordReducer(state: Record[] = [], action: RecordActions.Actions) {

    switch(action.type) {
        case RecordActions.ADD_RECORD:
            return [...state, action.payload];
        default:
            return state;
    }
}