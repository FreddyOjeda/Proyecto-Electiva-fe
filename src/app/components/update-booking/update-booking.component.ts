import { Component } from '@angular/core';
import { Booking } from 'src/app/model/Booking';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

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
      this.booking.booking=this.booking.booking.slice(0,-8)
      this.booking.delivery=this.booking.delivery.slice(0,-8)
    })
    //2023-03-07T05:00:00.000Z -> desde el sevidor
    //2020-03-13T18:22 -> Formato aceptado
    //2023-03-14T00:00:
  }
  update(b:String,d:String,o:String){
    this.booking.delivery = d
    this.booking.booking = b
    this.booking.observations = o
    fetch(`${environment.apiUrl}/${this.booking._id}`,{
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(this.booking)
    })
    .then(resp=>resp.json())
    .then(data=>{
      if(data.Success){
        Swal.fire("Actualizacion Exitosa :)");
      }else{
        Swal.fire("No se actualizó :(");
      }
    })
  }

}
