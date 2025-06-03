import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuejaService } from '../services/queja.service';
import { Queja } from '../models/queja.model';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.css']
})
export class QuejasComponent {
  quejaForm: FormGroup;

  constructor(private fb: FormBuilder, private quejaService: QuejaService) {
    this.quejaForm = this.fb.group({
      nombre: [''],
      documento: [''],
      correo: [''],
      telefono: [''],
      tipoServicio: [''],
      empresa: [''],
      descripcion: ['']
    });
  }

  enviarQueja(): void {
    const tiposDeQueja = ['Baja', 'Media', 'Critica'];
    const tipoAleatorio = tiposDeQueja[Math.floor(Math.random() * tiposDeQueja.length)];

    const datos: Queja = {
      "Documento de identificación": this.quejaForm.value.documento,
      "Empresa": this.quejaForm.value.empresa,
      "Nombre ciudadano": this.quejaForm.value.nombre,
      "Fecha queja": new Date().toISOString().split('T')[0],
      "Tipo de queja": tipoAleatorio,
      "Estado": "Pendiente"
    };

    this.quejaService.enviarQueja(datos).subscribe({
      next: res => console.log('Enviado:', res),
      error: err => console.error('Error:', err)
    });
  }

  abrirFileInput() {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log('Archivo seleccionado:', file);
    // Aquí podrías implementar la lógica de subida si es necesario
  }
}
