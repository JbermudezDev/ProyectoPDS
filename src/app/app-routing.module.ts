import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ServiciosComponent } from './servicios/servicios.component'; 
import { AuthComponent } from './auth/auth.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'detalles', component: DetallesComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
