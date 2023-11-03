import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriverMainComponent } from "../../content/driver/pages/driver-main/driver-main.component";
import { DriverAuthGuard } from "../guards/driver-auth.guard";
import { DriverOrderComponent } from "../../content/driver/pages/driver-order/driver-order.component";
import { InformationAboutOrderComponent } from "../../content/shared/pages/information-about-order/information-about-order.component";
import { DriverTrackSpendingMainComponent } from "../../content/driver/pages/driver-track-spending-main/driver-track-spending-main.component";
import { DriverTrackSpendingAdditingComponent } from "../../content/driver/pages/driver-track-spending-additing/driver-track-spending-additing.component";

const routes: Routes = [
  {
    path: '',
    component: DriverMainComponent,
    canActivate: [DriverAuthGuard]
  },
  {
    path: 'main',
    component: DriverMainComponent,
    canActivate: [DriverAuthGuard]
  },
  {
    path: 'waybills',
    children: [
      { path: 'list', component: DriverOrderComponent, canActivate: [DriverAuthGuard] },
      { path: 'detail/:id', component: InformationAboutOrderComponent, canActivate: [DriverAuthGuard] },
    ]
  },
  {
    path: 'track_spending',
    component: DriverTrackSpendingMainComponent,
    canActivate: [DriverAuthGuard],

  },
  {
    path: 'track_spending/add-expense',
    component: DriverTrackSpendingAdditingComponent,
    canActivate: [DriverAuthGuard]
  },
  {
    path: 'main',
    component: DriverMainComponent,
    canActivate: [DriverAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DriverAuthGuard],
})
export class DriverRoutingModule {
}
