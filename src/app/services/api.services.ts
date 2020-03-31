
import { Injectable} from '@angular/core';
import { Observable} from 'rxjs';
import {  HttpClient,HttpHeaders } from '@angular/common/http';

import { Device } from '../device';

@Injectable()
export class apiservice
{ 
    private _url: string = "http://web.onelap.in/api/devices";
    
    constructor(private httpclient: HttpClient) {}

    //GET Method  
    headersDict = {};                                         //defining the headers dictornary required for the application 

 
        getdetails(): Observable<Device[]>{
            
            const httpOptions = {
                headersDict: new HttpHeaders({
                    'Authorization':'NzUyOTk0MTM3ODozMzQ0NTU=',       //passing the authorization key
                  })
              };
            return this.httpclient.get<any>(this._url,this.headersDict);             //making get request from the 
}
 //POST Method





}




