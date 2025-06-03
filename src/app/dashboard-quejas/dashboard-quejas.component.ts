import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-quejas',
  templateUrl: './dashboard-quejas.component.html',
  styleUrls: ['./dashboard-quejas.component.css']
})
export class DashboardQuejasComponent {
  totalQuejas = 132;
  resueltas = 94;
  pendientes = 30;
  vencidas = 8;

  empresas = [
    { nombre: 'Energía S.A.', total: 45, resueltas: 35, pendientes: 10 },
    { nombre: 'Aguas del Pueblo', total: 38, resueltas: 30, pendientes: 8 },
    { nombre: 'GasSur', total: 25, resueltas: 20, pendientes: 5 },
    { nombre: 'Ecodistrital', total: 24, resueltas: 9, pendientes: 15 }
  ];
}
