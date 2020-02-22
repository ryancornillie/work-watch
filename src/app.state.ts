import { Project } from './models/project.model';

export interface AppState {
  readonly project: Project[];
}