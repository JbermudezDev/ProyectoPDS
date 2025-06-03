import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar-respuesta',
  templateUrl: './registrar-respuesta.component.html',
  styleUrls: ['./registrar-respuesta.component.css']
})
export class RegistrarRespuestaComponent {
  queja = {
    id: '1023',
    empresa: 'Aguas del Pueblo',
    descripcion: 'Error en la facturación'
  };

  respuesta: string = '';

  enviarRespuesta() {
    if (!this.respuesta.trim()) {
      alert('Por favor escribe una respuesta.');
      return;
    }

    console.log('Respuesta enviada:', this.respuesta);
    alert('Respuesta registrada correctamente.');
    this.respuesta = '';
  }
}
