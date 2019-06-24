import { Component } from '@angular/core';
import { StockApiService } from '../stock-api.service'
import { MovieFinderComponent } from './movie-finder/movie-finder.component'
import { MovieApiService } from './movie-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-search-front';
  res: any
  data: any
  
  
  
}
