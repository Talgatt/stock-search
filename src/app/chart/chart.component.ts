import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { StockApiService } from '../../stock-api.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild('lineChart') private chartRef;
  chart: any;
  labelsArr: any = ['X', 'Y'];
  dataArr: any;
  data: any;
  
  dataPoints: any =[{
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 20
    }];

  //const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
//   var json_data = {"2013-01-21":1,"2013-01-22":7};
// var result = [json_data];
// console.log(result);


  constructor(public _api: StockApiService) { }

  getSeries(){
     this._api.getTimeSeriesDaily()
    .subscribe((res:any) => {
    //  this.data = res['Time Series (Daily)']['2019-01-11']
    this.data = res['Time Series (Daily)']
  
      
    })


    
  }
  
  



  ngOnInit() {
  
        
        this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.labelsArr, // your labels array
        datasets: [
          {
            data: this.dataPoints, // your data array
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    
  }
  
  onClick(){
    
     this._api.getTimeSeriesDaily()
    .subscribe((res:any) => {
    //  this.data = res['Time Series (Daily)']['2019-01-11']
    this.data = res['Time Series (Daily)']
  
      
    })

    
      this.dataArr = [this.data]
    const arr = Object.keys(this.data).map((key) => [key, this.data[key]]);
      console.log(this.dataArr);
    
        this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.labelsArr, // your labels array
        datasets: [
          {
            data: this.dataPoints, // your data array
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

  }
 

  
  
}
