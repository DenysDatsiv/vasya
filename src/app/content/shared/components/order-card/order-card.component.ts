import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent {
  constructor(private router:Router) {
  }
  @Input() orderShortInformation: any[];

  cardMoreInformation(id: string): void {
    this.router.navigate(['/driver/waybills/detail', id])
      .catch(error => {
        console.error('Error navigating:', error);
      });
  }

}
