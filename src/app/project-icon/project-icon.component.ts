import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-icon',
  templateUrl: './project-icon.component.html',
  styleUrls: ['./project-icon.component.sass']
})
export class ProjectIconComponent implements OnInit {

  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
