import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {OrdersService} from "../../../../core/services/orders.service";

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent {
  constructor(private router:Router,private ordersService:OrdersService) {
  }
  @Input() orderShortInformation: any[];

  cardMoreInformation(id: string): void {
    this.router.navigate(['/driver/waybills/detail', id]);
  }

}
