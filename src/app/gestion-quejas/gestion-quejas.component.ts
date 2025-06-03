import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-quejas',
  templateUrl: './gestion-quejas.component.html',
  styleUrls: ['./gestion-quejas.component.css']
})
export class GestionQuejasComponent {
  quejas = [
    { id: 1024, fecha: '05/04/2024', descripcion: 'Fluctuaciones de voltaje', estado: 'Pendiente', estadoClase: 'pendiente' },
    { id: 1023, fecha: '02/04/2024', descripcion: 'Error en la facturación', estado: 'Resuelta', estadoClase: 'resuelta' },
    { id: 1018, fecha: '28/03/2024', descripcion: 'Interrupciones en el servicio', estado: 'Resuelta', estadoClase: 'resuelta' },
    { id: 1015, fecha: '22/03/2024', descripcion: 'Escasez de agua', estado: 'Pendiente', estadoClase: 'pendiente' },
    { id: 1012, fecha: '19/03/2024', descripcion: 'Retraso en recolección de residuos', estado: 'Resuelta', estadoClase: 'resuelta' }
  ];

  get quejasActivas() {
    return this.quejas.filter(q => q.estado === 'Pendiente').length;
  }

  get quejasResueltas() {
    return this.quejas.filter(q => q.estado === 'Resuelta').length;
  }

  get tiempoPromedio() {
    return 3.2; // Valor fijo de ejemplo. Podrías calcularlo con fechas reales.
  }
}
