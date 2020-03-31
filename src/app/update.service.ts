import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Device } from './device';
import { apiservice } from './services/api.services';

HttpClient

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  url = 'http://web.onelap.in/api/devices/1';
  

  lstdetails: Device[];
  
  constructor(private _http: HttpClient,private _apiservice: apiservice) { }

  headerDict = {};  
  



  put(odevice:Device): Observable<any>
  { 
    
    const httpOptions = {
      headersDict: new HttpHeaders({
          'Authorization': 'NzUyOTk0MTM3ODozMzQ0NTU=',       //passing the authorization key
        })
    };
    
    this._apiservice.getdetails()
    .subscribe(data=>this.lstdetails = data);

      return this._http.put(this.url,odevice,this.headerDict);
  }
}
