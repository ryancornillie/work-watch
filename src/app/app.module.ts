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
import { reducer } from '../reducers/project.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectIconComponent,
    NewProjectButtonComponent
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
    StoreModule.forRoot({ project: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
