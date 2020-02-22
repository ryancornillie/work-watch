import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass']
})
export class ProjectListComponent implements OnInit {

  projects$: Observable<any>;

  constructor(private store: Store<AppState>) { 
    this.projects$ = store.pipe(select('project'));
  };

  ngOnInit() {
    
  }

}
