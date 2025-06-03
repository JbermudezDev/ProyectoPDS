import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetallesComponent,
    ServiciosComponent,
    AuthComponent,
    ContactoComponent,
    QuejasComponent,
    EstadoQuejasComponent,
    GestionQuejasComponent,
    RegistrarRespuestaComponent,
    DashboardQuejasComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
