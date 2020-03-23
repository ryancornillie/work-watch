import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NbThemeModule, NbCardModule, NbLayoutModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { ProjectIconComponent } from './project-icon/project-icon.component';
import { NewProjectButtonComponent } from './new-project-button/new-project-button.component';
import { StoreModule } from '@ngrx/store';
import { projectReducer } from '../reducers/project.reducer';
import { recordReducer } from '../reducers/record.reducer';
import { HttpClientModule } from '@angular/common/http';
import { ProjectEffects } from 'src/effects/project.effects';
import { EffectsModule } from '@ngrx/effects';
import { StartTimeButtonComponent } from './start-time-button/start-time-button.component';
import { RecordEffects } from 'src/effects/record.effects';

let rootReducer = {
  projects: projectReducer,
  records: recordReducer
}

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectIconComponent,
    NewProjectButtonComponent,
    StartTimeButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([ProjectEffects, RecordEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
