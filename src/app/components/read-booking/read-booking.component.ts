import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Booking } from 'src/app/model/Booking';

@Component({
  selector: 'app-read-booking',
  templateUrl: './read-booking.component.html',
  styleUrls: ['./read-booking.component.css']
})
export class ReadBookingComponent {

  info !: Booking[]

  constructor(){
    fetch(environment.apiUrl)
    .then(resp => resp.json())
    .then(data =>{
      this.info= data.Data
      console.log(this.info)
    })
  }

}
