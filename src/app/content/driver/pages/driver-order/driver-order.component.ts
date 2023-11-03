import {Component, OnInit} from '@angular/core';
import {OrdersService} from "../../../../core/services/orders.service";

@Component({
  selector: 'app-driver-order',
  templateUrl: './driver-order.component.html',
  styleUrls: ['./driver-order.component.scss']
})
export class DriverOrderComponent implements OnInit {
  orderShortInformation: { id:string,pickupLocation:string,deliveryLocation:string }[];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.ordersService.getPickupAndDeliveryLocations().subscribe(
      result => {
        this.orderShortInformation = result
      }
    )
  }


}
