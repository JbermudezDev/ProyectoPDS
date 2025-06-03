import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  servicios = [
    {
      numero: '01',
      titulo: 'Recepción de Quejas Multicanal',
      abierto: false,
      imagen: '/assets/images/quejas.avif',
      detalles: [
        'Permite recibir quejas a través de múltiples canales como correo, formulario web, llamadas y redes sociales.',
        'Facilita la centralización de la información para una mejor gestión.'
      ]
    },
    {
      numero: '02',
      titulo: 'Unificación y Tipificación de Quejas',
      abierto: false,
      imagen: '/assets/images/unificacion.jpg',
      detalles: [
        'Clasifica las quejas según su naturaleza, tipo y área responsable.',
        'Evita duplicidades y mejora la trazabilidad.'
      ]
    },
    {
      numero: '03',
      titulo: 'Registro y Gestión de Respuestas',
      abierto: false,
      imagen: '/assets/images/Tiempo.png',
      detalles: [
        'Registra las respuestas emitidas por cada área responsable.',
        'Permite hacer seguimiento a los compromisos adquiridos.'
      ]
    },
    {
      numero: '04',
      titulo: 'Asignación Automática de Casos',
      abierto: false,
      imagen: '/assets/images/casos.jpg',
      detalles: [
        'Asigna automáticamente cada queja a la unidad correspondiente según reglas predefinidas.',
        'Reduce tiempos de atención y errores humanos.'
      ]
    },
    {
      numero: '05',
      titulo: 'Seguridad y Registro de Datos',
      abierto: false,
      imagen: '/assets/images/seguridad.jpg',
      detalles: [
        'Garantiza la protección de datos sensibles y trazabilidad completa.',
        'Cumple con las normas de protección de datos personales.'
      ]
    },
    {
      numero: '06',
      titulo: 'Soporte y Atención al Usuario',
      abierto: false,
      imagen: '/assets/images/soporte.jpg',
      detalles: [
        'Canal de ayuda para resolver dudas sobre el uso de la plataforma.',
        'Asesoramiento en la gestión y resolución de quejas.'
      ]
    }
  ];

  toggle(index: number) {
    this.servicios[index].abierto = !this.servicios[index].abierto;
  }
  
}
