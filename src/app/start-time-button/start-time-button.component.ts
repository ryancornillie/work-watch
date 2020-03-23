import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Record } from 'src/models/record.model';
import { RequestCreateRecord } from 'src/actions/record.actions';

@Component({
  selector: 'app-start-time-button',
  templateUrl: './start-time-button.component.html',
  styleUrls: ['./start-time-button.component.sass']
})
export class StartTimeButtonComponent implements OnInit {

  constructor(private store: Store<{ records: Record[] }>) { }

  @Input() projectId: string;

  ngOnInit() {
  }

  startWork() {

    const newRecord: Record = {
      start_time: null,
      end_time: null,
      project_id: this.projectId
    }

    console.log("start work", newRecord)

    this.store.dispatch(new RequestCreateRecord(newRecord));
  }

}
