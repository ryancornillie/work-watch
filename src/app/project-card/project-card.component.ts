import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
    console.log("check project", this.project);
  }

}
