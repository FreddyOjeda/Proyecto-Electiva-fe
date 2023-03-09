import { Component } from '@angular/core';
import { Booking } from 'src/app/model/Booking';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent {

  flag:boolean=false
  info !: Booking[]
  booking!:Booking

  constructor(){
    fetch(environment.apiUrl)
    .then(resp => resp.json())
    .then(data =>{
      this.info= data.Data
    })
  }

  editing(id:String){
    this.booking = new Booking()
    fetch(environment.apiUrl+'/'+id)
    .then(resp=>resp.json())
    .then(data=>{
      this.booking=data.Data
    })

  }

}
