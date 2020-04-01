import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Device } from '../../device';
import { apiservice } from '../getService/api.services';
import { uDevice } from './deviceput';

HttpClient

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  url = 'http://web.onelap.in/api/devices';
  

  lstdetails: Device[];
  
  constructor(private _http: HttpClient,private _apiservice: apiservice) { }

  
  
  fdevice={
    
      "id": 2176,
          "attributes": {},
          "name": "abhishekk",
          "uniqueId": "33333333",
  
  };




  put(fdevice: uDevice): Observable<any>
  {
    return this._http.put(this.url,fdevice);
  }
}
