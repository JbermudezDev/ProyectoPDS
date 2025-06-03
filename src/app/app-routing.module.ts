import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ServiciosComponent } from './servicios/servicios.component'; 
import { AuthComponent } from './auth/auth.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuejasComponent } from './quejas/quejas.component';
import { EstadoQuejasComponent } from './estado-quejas/estado-quejas.component';
import { GestionQuejasComponent } from './gestion-quejas/gestion-quejas.component';
import { RegistrarRespuestaComponent } from './registrar-respuesta/registrar-respuesta.component';
import { DashboardQuejasComponent } from './dashboard-quejas/dashboard-quejas.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'detalles', component: DetallesComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quejas', component: QuejasComponent },
  { path: 'estado', component: EstadoQuejasComponent },
  { path: 'gestion', component: GestionQuejasComponent },
  { path: 'registrar-respuesta', component: RegistrarRespuestaComponent },
  { path: 'dashboard', component: DashboardQuejasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
