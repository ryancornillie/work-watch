import { Action } from '@ngrx/store'
import { Project } from './../models/project.model'
import * as ProjectActions from './../actions/project.actions'

export function reducer(state: Project[] = [], action: ProjectActions.Actions) {

    switch(action.type) {
        case ProjectActions.ADD_PROJECT:
            return [...state, action.payload];
        case ProjectActions.ADD_PROJECTS:
            console.log(action.payload);
            return [...state, ...action.payload]
        default:
            return state;
    }
}