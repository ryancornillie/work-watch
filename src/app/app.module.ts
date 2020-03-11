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
import { HttpClientModule } from '@angular/common/http';
import { ProjectEffects } from 'src/effects/project.effects';
import { EffectsModule } from '@ngrx/effects';

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
    HttpClientModule,
    StoreModule.forRoot({ project: reducer }),
    EffectsModule.forRoot([ProjectEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
