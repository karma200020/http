import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../services/putService/update.service';
import { Device } from '../device';
import { uDevice } from '../services/putService/deviceput';
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  fdevice: uDevice={
    
    "id": 2176,
        "attributes": {},
        "name": "abhishekk",
        "uniqueId": "33333333",

};


  Device: Device={
    id: 1,
    name: "some device",
    uniqueId: "",
    attributes: "some attribute",
    status: "",
        lastUpdate: "string",
        positionId: 0,
        groupId: 0,
        geofenceIds: [],
        phone: "",
        model: "",
        contact:  "",
        category:  "",
        validity:  "",
  }

  constructor(private _updateService: UpdateService) { 
    
   }
   

  ngOnInit(): void {
  }
  onSubmit(){
    this._updateService.put(this.fdevice)
    .subscribe(
      data=> console.log('Success', data),
      error=> console.error('Error!', error)
    )
  }

}
