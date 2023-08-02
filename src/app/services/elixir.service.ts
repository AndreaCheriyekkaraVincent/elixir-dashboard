import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Elixir } from '../models/elixir.model';

@Injectable({
  providedIn: 'root'
})
export class ElixirService {
  private apiUrl = 'https://wizard-world-api.herokuapp.com/Elixirs';

  constructor(private http: HttpClient) {}

  getAllElixirs(): Observable<Elixir[]> {
    console.log('this.http.get<Elixir[]>(this.apiUrl)',this.http.get<Elixir[]>(this.apiUrl));
    return this.http.get<Elixir[]>(this.apiUrl);
  }

  getElixirById(id: string): Observable<Elixir> {
    return this.http.get<Elixir>(`${this.apiUrl}/${id}`);
  }

  searchElixirsByName(name: string): Observable<Elixir[]> {
    return this.http.get<Elixir[]>(`${this.apiUrl}?name=${name}`);
  }
}
