import { Component,Injectable } from '@angular/core';

import { apiservice } from './services/getService/api.services';
import { Device } from './device';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  constructor(private _apiservice: apiservice){}

  //Declarations

lstdetails: Device[];


  ngOnInit(): any {
    this._apiservice.getdetails()
    .subscribe(data=>this.lstdetails = data); //subscribing to the service
 
    
  }

 
 
  
}
