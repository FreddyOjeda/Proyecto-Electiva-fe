import { Component } from '@angular/core';
import { Booking } from 'src/app/model/Booking';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

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
      this.info= data.data
    })
  }

  editing(id:String){
    this.booking = new Booking()
    fetch(environment.apiUrl+'/'+id)
    .then(resp=>resp.json())
    .then(data=>{
      this.booking=data.data
    })
  }

  delete(){
    Swal
    .fire({
        title: `Reservacion #${this.booking.id}`,
        text: "¿Sguro desea elminar?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            // Hicieron click en "Sí"
            fetch(`${environment.apiUrl}/${this.booking.id}`,{
              method:'DELETE',
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            })
            .then(resp=>resp.json())
            .then(data=>{
              Swal.fire('Eliminado')
            })
        }
    });
  }
}
