import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Master {
  
  apiUrl: string = 'https://'
  constructor(private http: HttpClient) {}

}
