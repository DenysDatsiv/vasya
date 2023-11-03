import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { OrdersService } from "../../../../core/services/orders.service";
import { MatDialog } from "@angular/material/dialog";
import { OrderPickupDialogComponent } from "../../../driver/components/order-pickup-dialog/order-pickup-dialog.component";
import { switchMap } from 'rxjs/operators';
import { Order } from "../../../../core/interfaces/interfaces"

@Component({
  selector: 'app-information-about-order',
  templateUrl: './information-about-order.component.html',
  styleUrls: ['./information-about-order.component.scss']
})
export class InformationAboutOrderComponent implements OnInit, OnDestroy {
  id: string;
  orderData: Order;
  private routeSubscription: Subscription;
  private dialogSubscription: Subscription;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private ordersService: OrdersService
  ) {
  }

  ngOnInit() : void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.ordersService.getOrderById(this.id).subscribe(
      result => {
        this.orderData = result;
      }
    )
  }

  openDialog(): void {
    if (this.orderData.status !== 'delivered') {
      const dialogRef = this.dialog.open(OrderPickupDialogComponent, {
        width: '300px',
        data: {status: this.orderData.status, id: this.orderData.id},
      });

      this.dialogSubscription = dialogRef.afterClosed().pipe(
        switchMap(result => {
          if (result) {
            return this.ordersService.getOrderById(this.id);
          }
          return [];
        })
      ).subscribe(updatedOrder => {
        if (updatedOrder) {
          this.orderData = updatedOrder;
        }
      });
    }
  }

  getStatusClass() {
    return this.orderData.status === 'pending'
      ? 'pending-class'
      : this.orderData.status === 'accepted'
        ? 'accepted-class'
        : this.orderData.status === 'pickedUp'
          ? 'pickedup-class'
          : this.orderData.status === 'delivered'
            ? 'delivered-class'
            : '';
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    if (this.dialogSubscription) {
      this.dialogSubscription.unsubscribe();
    }
  }
}
