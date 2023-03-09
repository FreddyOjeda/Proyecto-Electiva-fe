import { Component } from '@angular/core';
import { Booking } from 'src/app/model/Booking';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent {

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

  delete(){
    fetch(`${environment.apiUrl}/${this.booking._id}`,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data.Data);
    })
  }
}
