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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetallesComponent,
    ServiciosComponent,
    AuthComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
