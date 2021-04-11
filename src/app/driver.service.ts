import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Driver} from "./Driver";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>('http://demo8820151.mockable.io/drivers');
  }
}
