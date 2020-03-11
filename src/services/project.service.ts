import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './../models/project.model';

@Injectable({
    providedIn: 'root'
  })
  export class ProjectService {
    constructor (private http: HttpClient) {}
  
    getAll() {
      return this.http.get('http://127.0.0.1:5000/projects');
    }

    createProject(project: Project) {
        return this.http.post('http://127.0.0.1:5000/projects', project);
    }
    
  }