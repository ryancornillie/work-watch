import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Record } from 'src/models/record.model';

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
    // this.state.dis
  }

}
