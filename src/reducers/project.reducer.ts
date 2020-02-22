import { Action } from '@ngrx/store'
import { Project } from './../models/project.model'
import * as ProjectActions from './../actions/project.actions'

export const initialState: Project[] = [{
      color: '#33FFD4',
      name: 'My First Project'
    },
    {
      color: '#A533FF',
      name: 'My Second Project'
    }
];

export function reducer(state: Project[] = initialState, action: ProjectActions.Actions) {

    switch(action.type) {
        case ProjectActions.ADD_PROJECT:
            return [...state, action.payload];
        default:
            return state;
    }
}