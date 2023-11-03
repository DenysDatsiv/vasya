import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { OrdersService } from "../../../../core/services/orders.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-order-pickup-dialog',
  templateUrl: './order-pickup-dialog.component.html',
  styleUrls: ['./order-pickup-dialog.component.scss']
})
export class OrderPickupDialogComponent implements OnDestroy {
  private subscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<OrderPickupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { status: string, id: string },
    private ordersService: OrdersService
  ) {
  }

  onChangeStatus(): void {
    const statusMappings = {
      "pending": "accepted",
      "accepted": "pickedUp",
      "pickedUp": "delivered",
      "delivered": "delivered"
    };

    const nextStatus = statusMappings[this.data.status];
    if (nextStatus) {
      this.updateStatus(this.data.id, nextStatus);
      this.dialogRef.close(nextStatus);
    } else {
      console.log("Invalid status.");
      this.dialogRef.close();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateStatus(orderId, newStatus: string) : void {
    this.subscription = this.ordersService.updateOrderStatus(orderId, newStatus).subscribe(
      (updatedOrder) => {
        console.log('Order status updated:', updatedOrder);
      },
      (error) => {
        console.error('Error updating order status:', error);
      }
    );
  }
}
