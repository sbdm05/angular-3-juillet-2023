import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

// DECORATOR
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  // CRéer une méthode pour faire un calcul
  public sumUp(a: number, b: number): number {
    return a + b;
  }

  // METHODE GET
  public getDatas(): Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:3005/orders')
  }



}
