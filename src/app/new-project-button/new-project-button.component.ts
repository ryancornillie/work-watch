import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Project } from 'src/models/project.model';
import { AddProject } from 'src/actions/project.actions';

@Component({
  selector: 'app-new-project-button',
  templateUrl: './new-project-button.component.html',
  styleUrls: ['./new-project-button.component.sass']
})
export class NewProjectButtonComponent implements OnInit {

  projectName: string = '';

  constructor(private store: Store<{ count: Project[] }>) { }

  ngOnInit() {
  }

  onNewProjectClick = function() {
    this.store.dispatch(new AddProject({name: this.projectName, color: '#FF7A33'}));
  };

}
