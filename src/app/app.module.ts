import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';


import { JsonpModule } from '@angular/http'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { MovieFinderComponent } from './movie-finder/movie-finder.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    MovieFinderComponent,
    MovieCardComponent,
    PopularSeriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
