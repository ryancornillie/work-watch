
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, concatMap } from 'rxjs/operators';
import { REQUEST_CREATE_PROJECT, ADD_PROJECT, RequestCreateProject } from 'src/actions/project.actions';
import { ProjectService } from 'src/services/project.service';

@Injectable()
export class ProjectEffects {
 
  createProject$ = createEffect(() => this.actions$.pipe(
    ofType<RequestCreateProject>(REQUEST_CREATE_PROJECT),
    concatMap((action) => this.projectService.createProject(action.payload)),
    map(resp => ({ type: ADD_PROJECT, payload: resp })),
    catchError(() => EMPTY))
  );
 
  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}