import { Action } from '@ngrx/store'
import { Project } from '../models/project.model'

export const ADD_PROJECT       = '[PROJECT] Add'
export const REMOVE_PROJECT    = '[PROJECT] Remove'

export class AddProject implements Action {
    readonly type = ADD_PROJECT
    constructor(public payload: Project) {}
}

export class RemoveProject implements Action {
    readonly type = REMOVE_PROJECT
    constructor(public payload: number) {}
}

export type Actions = AddProject | RemoveProject