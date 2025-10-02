import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Master {
  
  apiUrl: string = 'https://freeapi.gerasim.in'
  constructor(private http: HttpClient) {}

}
