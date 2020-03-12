import { Action } from '@ngrx/store'
import { Record } from '../models/record.model'

export const ADD_RECORD       = '[RECORD] Add'
export const REQUEST_CREATE_RECORD       = '[RECORD] Request Create'

export class AddRecord implements Action {
    readonly type = ADD_RECORD
    constructor(public payload: Record) {}
}

export class RequestCreateRecord implements Action {
    readonly type = REQUEST_CREATE_RECORD
    constructor(public payload: Record) {}
}


export type Actions = AddRecord | RequestCreateRecord