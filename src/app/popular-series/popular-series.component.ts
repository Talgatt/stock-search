import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.css']
})
export class PopularSeriesComponent implements OnInit {

  series: Array<Object>
  
  constructor(private _api: MovieApiService) { 
    this._api.getPopularSeries().subscribe(res => {
      this.series = res.results;
    })
  }

  ngOnInit() {
  }
  
  

}
