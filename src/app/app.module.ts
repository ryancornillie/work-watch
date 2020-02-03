import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NbThemeModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { ProjectIconComponent } from './project-icon/project-icon.component'

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
