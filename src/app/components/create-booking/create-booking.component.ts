import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Booking } from 'src/app/model/Booking';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {

  constructor(){}

  personSelect:any

  saveBooking(p:String,c:String,d1:String,d2:String,o:String){
    //this.httpClient.post<Post | HttpErrorResponse>(`${this.host}/posts/create`, formData);
    alert('entro')
    alert(p)
    let person = document.getElementById('person')
    let data = new Booking();
    data.booking=d1
    data.delivery=d2
    data.car=c
    data.person=p
    data.observations=o
    console.log(data)
    fetch(`${environment.apiUrl}`,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data.Data);
    })
  }

}
