import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nombre = '';
  email = '';
  mensaje = '';

  faqs = [
    {
      pregunta: '¿Preguntas frecuentes (FAQ)?',
      respuesta: 'Aquí encontrarás respuestas a las dudas más comunes que tienen los ciudadanos.',
      abierto: false
    },
    {
      pregunta: '¿Cómo hacer seguimiento a una queja?',
      respuesta: 'Puedes consultar el estado ingresando con tu correo en la sección de historial de quejas.',
      abierto: false
    },
    {
      pregunta: '¿Cuánto tarda en resolverse una queja?',
      respuesta: 'El tiempo depende del tipo de servicio, pero el sistema notifica cuando se vence el plazo.',
      abierto: false
    },
    {
      pregunta: '¿Qué pasa si la empresa no responde?',
      respuesta: 'Se genera automáticamente una alerta de incumplimiento y se asigna a un profesional.',
      abierto: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].abierto = !this.faqs[index].abierto;
  }

  enviarFormulario() {
    console.log('Mensaje enviado:', this.nombre, this.email, this.mensaje);
    alert('Gracias por contactarnos. Te responderemos pronto.');
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }
}
