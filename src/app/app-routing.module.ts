import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ServiciosComponent } from './servicios/servicios.component'; 
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'detalles', component: DetallesComponent },
  { path: 'servicios', component: ServiciosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
