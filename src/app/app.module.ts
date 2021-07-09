import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotTableModule } from '@handsontable/angular';

import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
