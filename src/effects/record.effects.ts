
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, concatMap, mergeMap, tap } from 'rxjs/operators';
import { RecordService } from 'src/services/record.service';
import { REQUEST_CREATE_RECORD, RequestCreateRecord, ADD_RECORD } from 'src/actions/record.actions';

@Injectable()
export class RecordEffects {
 
  createRecord$ = createEffect(() => this.actions$.pipe(
    ofType<RequestCreateRecord>(REQUEST_CREATE_RECORD),
    tap(() => console.log("test this")),
    concatMap((action) => this.recordService.createRecord(action.payload)),
    map(resp => ({ type: ADD_RECORD, payload: resp })),
    catchError(() => EMPTY))
  );
 
  constructor(
    private actions$: Actions,
    private recordService: RecordService
  ) {}
}