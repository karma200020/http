import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
import { Device } from '../device';
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

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
    this._updateService.put(this.Device)
    .subscribe(
      data=> console.log('Success', data),
      error=> console.error('Error!', error)
    )
  }

}
