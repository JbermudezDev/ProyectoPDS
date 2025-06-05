import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queja } from '../models/queja.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuejaService {
  private apiUrl = 'https://proyectopds-x3tk.onrender.com/api/documentos';

  constructor(private http: HttpClient) {}

  enviarQueja(queja: Queja): Observable<any> {
    return this.http.post(this.apiUrl, queja);
  }
}
