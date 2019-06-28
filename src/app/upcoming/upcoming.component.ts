import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service'


@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  upcoming: Array<Object>
  
  constructor(private _api: MovieApiService) {
     this._api.getUpcoming().subscribe((res:any) => {
      this.upcoming = res.results;
    })
    
  }

  ngOnInit() {
  }

}
