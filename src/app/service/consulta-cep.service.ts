import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from '../models/cep';

const API = 'https://viacep.com.br/ws'

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  public getConsultaCep(cep: string): Observable<Cep>{
    return this.http.get<Cep>(`${API}/${cep}/json`);
  }
}
