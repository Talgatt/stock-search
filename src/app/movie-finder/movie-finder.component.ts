import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'


@Component({
  selector: 'app-movie-finder',
  templateUrl: './movie-finder.component.html',
  styleUrls: ['./movie-finder.component.css']
})
export class MovieFinderComponent implements OnInit {
  data: any;
  queryValue: string;
  searchRes: Array<Object>;
  popular: Array<Object>;
  topRated: Array<Object>;
  
  
  
  constructor(public _api: MovieApiService) { 
    
      this._api.getPopular().subscribe(res => {
        this.popular = res.results;
      })
    
      this._api.getTopRated().subscribe(res => {
        this.topRated = res.results;
      })
    
    
  }

  ngOnInit() {
  }

  movieSearch(){
    
    this._api.searchMovie(this.queryValue)
    .subscribe((res:any) => {
    this.searchRes = res.results
    console.log(this.data)
    })
    
  }
  
  
  
}
