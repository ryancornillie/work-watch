import { Component, OnInit } from '@angular/core';
import { Project } from '../project-card/project-card.component'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [
    {
      color: '#33FFD4',
      name: 'My First Project'
    },
    {
      color: '#A533FF',
      name: 'My Second Project'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
