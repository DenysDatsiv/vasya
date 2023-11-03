import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private readonly baseUrl = 'http://localhost:8080/';
  private readonly orders = 'orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    const url = this.baseUrl + this.orders;
    return this.http.get<Order[]>(url);
  }
  //ToDO:Change any when Yaroslav would send correct data for orders
  getPickupAndDeliveryLocations(): Observable<any[]> {
    return this.getOrders().pipe(
      map(shipments => shipments.map(shipment => ({
        id:shipment.id,
        status:shipment.status,
        pickupLocation: shipment.pickupDetails.location,
        deliveryLocation: shipment.deliveryDetails.location
      })))
    );
  }
  getOrderById(id: string): Observable<Order> {
    const url = `${this.baseUrl}${this.orders}/${id}`;
    return this.http.get<Order>(url);
  }
  updateOrderStatus(id: string, newStatus: string): Observable<Order> {
    const url = `${this.baseUrl}${this.orders}/${id}`;
    const updatedOrder = { status: newStatus };

    return this.http.put<Order>(url, updatedOrder);
  }
}
