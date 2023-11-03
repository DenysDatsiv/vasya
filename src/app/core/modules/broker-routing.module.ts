import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrokerMainComponent } from "../../content/broker/pages/broker-main/broker-main.component";
import { BrokerAuthGuard } from "../guards/broker-auth.guard";
import { InformationAboutOrderComponent } from "../../content/shared/pages/information-about-order/information-about-order.component";
import { BrokerOrdersComponent } from "../../content/broker/pages/broker-orders/broker-orders.component";
import { BrokerOrdersAddingComponent } from "../../content/broker/pages/broker-orders-adding/broker-orders-adding.component";
import { BrokerDriversListComponent } from "../../content/broker/pages/broker-drivers-list/broker-drivers-list.component";
import { BrokerDriversAddingComponent } from "../../content/broker/pages/broker-drivers-adding/broker-drivers-adding.component";
import { BrokerDriverDetailsComponent } from "../../content/broker/pages/broker-driver-details/broker-driver-details.component";
import { BrokerCarsListComponent } from "../../content/broker/pages/broker-cars-list/broker-cars-list.component";
import { BrokerDriverAddingComponent } from "../../content/broker/pages/broker-driver-adding/broker-driver-adding.component";
import { BrokerCarDetailsComponent } from "../../content/broker/pages/broker-car-details/broker-car-details.component";
import { InvitationForDriverComponent } from "../../content/broker/pages/invitation-for-driver/invitation-for-driver.component";
import { FinesComponent } from "../../content/broker/pages/fines/fines.component";
import { FineDetailsComponent } from "../../content/broker/pages/fine-details/fine-details.component";

const routes: Routes = [
  {
    path: '',
    component: BrokerMainComponent,
    canActivate: [BrokerAuthGuard]
  },
  {
    path: 'main',
    component: BrokerMainComponent,
    canActivate: [BrokerAuthGuard]
  },
  {
    path: 'waybills',
    component: BrokerOrdersComponent,
    canActivate: [BrokerAuthGuard],
    children: [
      {
        path: 'detail/:id',
        component: InformationAboutOrderComponent,
        canActivate: [BrokerAuthGuard]
      },
      {
        path: "adding",
        component: BrokerOrdersAddingComponent,
        canActivate: [BrokerAuthGuard]
      }
    ]
  },
  {
    path: "drivers_list",
    component: BrokerDriversListComponent,
    canActivate: [BrokerAuthGuard],
    children: [
      {
        path: 'adding',
        component: BrokerDriversAddingComponent,
        canActivate: [BrokerAuthGuard]
      },
      {
        path: 'detail/:id',
        component: BrokerDriverDetailsComponent,
        canActivate: [BrokerAuthGuard]
      },
    ]
  },
  {
    path: "cars_list",
    component: BrokerCarsListComponent,
    canActivate: [BrokerAuthGuard],
    children: [
      {
        path: 'adding',
        component: BrokerDriverAddingComponent,
        canActivate: [BrokerAuthGuard]
      },
      {
        path: 'detail/:id',
        component: BrokerCarDetailsComponent,
        canActivate: [BrokerAuthGuard]
      },
      {
        path: 'report/:id',
        component: BrokerCarDetailsComponent,
        canActivate: [BrokerAuthGuard]
      },
    ]
  },
  {
    path: 'invite_driver',
    component: InvitationForDriverComponent,
    canActivate: [BrokerAuthGuard]
  },
  {
    path: "fines",
    component: FinesComponent,
    canActivate: [BrokerAuthGuard],
    children: [
      {
        path: 'detail/:id',
        component: FineDetailsComponent,
        canActivate: [BrokerAuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [BrokerAuthGuard],
})
export class BrokerRoutingModule {
}
