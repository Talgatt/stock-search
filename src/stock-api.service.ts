import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockApiService {

  constructor(private _http: HttpClient) { }

  
  baseUrl: string = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=A6V490YTYNB1D7ED'
// test: string = `${this.baseUrl}people/`;

  // userData = {
  //     firstName: 'Diana',
  //     lastName: string = 'Tulege',
  //     email: string = 'dian@gmail.com',
  //     password: string = 'Diano'
      
  //   }
  
  getTimeSeriesDaily(){
 

  //console.log(this.test);

   return this._http.get(`${this.baseUrl}`)
  //return this._http.get('https://swapi.co/api/people/')
 }
 
  getUserData(){
     
     let userData = {
      firstName: 'Diana',
      lastName: 'Tulege',
      email: 'dian@gmail.com',
      password: 'Diano'
      
    }
     
    return this._http.get('http://meanstack-2019-talgat-phortonssf.c9users.io:8080/api/appUsers')
    
   }
 
   postUserData(){
     
     let userData = {
      firstName: 'Diana',
      lastName: 'Tulege',
      email: 'dian@gmail.com',
      password: 'Diano'
      
    }
     
    return this._http.post('http://meanstack-2019-talgat-phortonssf.c9users.io:8080/api/appUsers', userData)
    
   }
   
   registerUserData(userform){
   
   return this._http.post('${this.baseUrl}/appUsers', userform)    
   }
  
}
