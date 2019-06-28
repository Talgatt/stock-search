import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class MovieApiService {
  
  apikey: string = 'e36e97689319dcfa2ccb4935168f5fbb'
  //constructor(private _http: HttpClient) { }
  constructor(private _jsonp: Jsonp){ }
  
   //baseUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=e36e97689319dcfa2ccb4935168f5fbb&query=Jack+Reacher'
  baseUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=e36e97689319dcfa2ccb4935168f5fbb&query='

  searchMovie(searchStr: string){
    
    //return this._http.get('https://api.themoviedb.org/3/search/movie?api_key=e36e97689319dcfa2ccb4935168f5fbb&query=Jack+Reacher')
    //console.log(`${this.baseUrl}${queryValue}`)
    //return this._http.get(`${this.baseUrl}${queryValue}`)
  
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
    })
  }
  
  getPopular(){ 
    var search = new URLSearchParams();
    search.set('sort_by', 'popularity.desc');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
  
  getTopRated(){
    var search = new URLSearchParams();
    search.set('sort_by', 'popularity.desc');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/top_rated?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
    })
  }
  
  getPopularSeries() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/popular?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
  
  getUpcoming(){
    var search = new URLSearchParams();
    search.set('api_key', this.apikey)
    return this._jsonp.get('https://api.themoviedb.org/3/movie/upcoming?callback=JSONP_CALLBACK',{search})
  }
  
}
