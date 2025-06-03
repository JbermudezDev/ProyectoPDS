import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queja } from '../models/queja.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuejaService {
  private apiUrl = 'http://localhost:8080/api/documentos';

  constructor(private http: HttpClient) {}

  enviarQueja(queja: Queja): Observable<any> {
    return this.http.post(this.apiUrl, queja);
  }
}
