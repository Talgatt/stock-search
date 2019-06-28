import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { MovieFinderComponent } from './movie-finder/movie-finder.component'
import { PopularSeriesComponent } from './popular-series/popular-series.component'
import { UpcomingComponent } from './upcoming/upcoming.component'

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'chart', component: ChartComponent},
  { path: 'search', component: MovieFinderComponent},
  { path: 'popular/series', component: PopularSeriesComponent},
  { path: 'upcoming', component: UpcomingComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
