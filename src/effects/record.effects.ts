
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, concatMap, mergeMap, tap, switchMap } from 'rxjs/operators';
import { RecordService } from 'src/services/record.service';
import { REQUEST_CREATE_RECORD, RequestCreateRecord, ADD_RECORD } from 'src/actions/record.actions';
import { REQUEST_PROJECTS } from 'src/actions/project.actions';

@Injectable()
export class RecordEffects {
 
  createRecord$ = createEffect(() => this.actions$.pipe(
    ofType<RequestCreateRecord>(REQUEST_CREATE_RECORD),
    concatMap((action) => this.recordService.createRecord(action.payload)),
    //TODO: add project entities and update project through project id
    switchMap(resp => [ {type: ADD_RECORD, payload: resp }, { type: REQUEST_PROJECTS} ]),
    catchError(() => EMPTY))
  );
 
  constructor(
    private actions$: Actions,
    private recordService: RecordService
  ) {}
}