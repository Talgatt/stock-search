import { Component, OnInit } from '@angular/core';
import { StockApiService } from '../../stock-api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  user: any;
  
  dataArr = [];
  ohlcdata = [];
  baseUrl = "http://meanstack-2019-talgat-phortonssf.c9users.io:8080/api";
  userform = {
    firstName: "",
    lastName: "",
    email: "",
    password : ""
    
  }
  
  constructor(public _api: StockApiService){}
  
  getSeries(){
     this._api.getTimeSeriesDaily()
    .subscribe((res:any) => {
    //  this.data = res['Time Series (Daily)']['2019-01-11']
    this.data = res['Time Series (Daily)']
    //  console.log(this.data);
      //this.dataArr = [this.data]
    // this.dataArr = Object.keys(this.data).map((key) => [key, this.data[key]]);
    
     // console.log(this.data);
     // console.log(this.data['2019-01-18']['1. open'])
       
       
      this.ohlcdata[0] = 1; //date
      this.ohlcdata[1] = this.data['2019-01-18']['1. open']; //open
      this.ohlcdata[2] = this.data['2019-01-18']['2. high']; //high
      this.ohlcdata[3] = this.data['2019-01-18']['3. low']; //low
      this.ohlcdata[4] = this.data['2019-01-18']['4. close']; //low
      console.log(this.ohlcdata)
      
      //console.log(this.data['2019-01-18']['1. open']);
       
      // for (var property1 in this.data) {
      //   this.dataArr += this.data[property1];
      // }
      //console.log(this.dataArr);
      // for (var open in this.data){
      //   this.dataArr.push(this.data[])
      // }
      
    })
    
  }
  
  getUserData(){
    this._api.getUserData()
    .subscribe(console.log)
  }
  
  postUserData(){
    this._api.postUserData()
    .subscribe(console.log)
  }

  // registerUser(){
  //   this.http.post("http://meanstack-2019-talgat-phortonssf.c9users.io:8080/api/appUsers", {
  //     firstName: "robert",
  //     lastName: "robert",
  //     email: "test1@gmail.com",
  //     password: "test123"
      
  //   }).subscribe(res => {
  //     sessionStorage.setItem("token",res.token)
  //     sessionStorage.setItem("userId", res.userId)
  //     this.user = res;
  //   })
  // }
  
   registerUser(){
     this._api.registerUserData(this.userform)
    .subscribe((res:any) => {
      sessionStorage.setItem("token",res.token)
      sessionStorage.setItem("userId", res.userId)
      this.user = res;
    })

    
  }
  

  ngOnInit() {
  }



}
