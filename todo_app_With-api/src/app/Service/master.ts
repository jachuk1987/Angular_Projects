import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class Master {
  
  apiUrl: string = 'https://freeapi.gerasim.in/api/JWT';

  constructor(private http: HttpClient) {}

  getAllTaskList(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(this.apiUrl + 'GetAllTaskList');
  }
}
