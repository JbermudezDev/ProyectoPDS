import { Component } from '@angular/core';

@Component({
  selector: 'app-estado-quejas',
  templateUrl: './estado-quejas.component.html',
  styleUrls: ['./estado-quejas.component.css']
})
export class EstadoQuejasComponent {
  filtro: string = '';

  quejas = [
    {
      numero: '001',
      fecha: '02/04/2024',
      empresa: 'Energía S.A.',
      estado: 'Pendiente',
      estadoClase: 'pendiente',
      accion: 'Ver detalles',
      accionClase: 'link'
    },
    {
      numero: '002',
      fecha: '25/03/2024',
      empresa: 'Aguas del Pueblo',
      estado: 'Resuelta',
      estadoClase: 'resuelta',
      accion: '3 días',
      accionClase: 'verde'
    },
    {
      numero: '003',
      fecha: '25/03/2024',
      empresa: 'Energía S.A.',
      estado: 'En revisión',
      estadoClase: 'revision',
      accion: 'Vencida',
      accionClase: 'rojo'
    },
    {
      numero: '004',
      fecha: '25/03/2024',
      empresa: 'Aguas del Irpa',
      estado: 'Resuelta',
      estadoClase: 'resuelta',
      accion: '1 día',
      accionClase: 'verde'
    }
  ];

  // ✅ Devuelve la lista filtrada según el input
  get quejasFiltradas() {
    const texto = this.filtro.toLowerCase();
    return this.quejas.filter(q =>
      q.numero.toLowerCase().includes(texto) ||
      q.empresa.toLowerCase().includes(texto) ||
      q.estado.toLowerCase().includes(texto)
    );
  }
}
