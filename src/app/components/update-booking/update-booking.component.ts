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
  selectedOption!: string;


  constructor(){
    fetch(environment.apiUrl)
    .then(resp => resp.json())
    .then(data =>{
      this.info= data.data
    })
  }

  editing(id:String){
    this.booking = new Booking()
    const url = environment.apiUrl+'/'+id;
    
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{
      this.booking=data.data
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
    fetch(`${environment.apiUrl}/${this.booking.id}`,{
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(this.booking)
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data);
      
      if(data.message=="Update Completed!"){
        Swal.fire("Actualizacion Exitosa :)");
      }else{
        Swal.fire("No se actualizó :(");
      }
    })
  }

}
