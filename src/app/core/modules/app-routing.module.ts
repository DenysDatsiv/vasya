import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../authentication/pages/login/login.component";
import {BrokerAuthGuard} from "../guards/broker-auth.guard";
import {DriverAuthGuard} from "../guards/driver-auth.guard";
import {ChatMainComponent} from "../../content/shared/pages/chat-main/chat-main.component";
import {AuthenticatedGuard} from "../guards/authenticated.guard";
import {
  CoversationWithUserComponent
} from "../../content/shared/pages/chat-main/coversation-with-user/coversation-with-user.component";
import {SettingsComponent} from "../../content/shared/pages/settings/settings.component";
import {AccountInformationComponent} from "../../content/shared/pages/account-information/account-information.component";
import {
  InformationChangingComponent
} from "../../content/shared/pages/account-information/information-changing/information-changing.component";
import {MapWithDriversComponent} from "../../content/shared/pages/map-with-drivers/map-with-drivers.component";
import {
  ListWithDriversLocationsComponent
} from "../../content/shared/pages/list-with-drivers-locations/list-with-drivers-locations.component";
import {SupportComponent} from "../../content/shared/pages/support/support.component";
import {PageNotFoundComponent} from "../../content/shared/pages/informational/page-not-found/page-not-found.component";
import {ForgotPasswordComponent} from "../authentication/pages/forgot-password/forgot-password.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'broker',
    loadChildren: () => import('./broker-routing.module').then(m => m.BrokerRoutingModule),
    canActivate: [BrokerAuthGuard],
  },
  {
    path: 'driver',
    loadChildren: () => import('./driver-routing.module').then(m => m.DriverRoutingModule)
    , canActivate: [DriverAuthGuard]
  },
  {
    path: 'messages',
    component: ChatMainComponent,
    // canActivate: [AuthenticatedGuard],
    children:[
      {
        path: "conversation/:userName",
        component:CoversationWithUserComponent,
        // canActivate: [AuthenticatedGuard]
      }
    ]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    // canActivate: [AuthenticatedGuard]
  },
  {
    path: 'personal_account',
    component: AccountInformationComponent,
    // canActivate: [AuthenticatedGuard],
    children: [
      {
        path: 'edit',
        component: InformationChangingComponent,
        // canActivate: [DriverAuthGuard]
      }
    ]
  },
  {
    path: 'drivers_location',
    component: MapWithDriversComponent,
    // canActivate: [AuthenticatedGuard],
    children: [
      {
        path: "list",
        component: ListWithDriversLocationsComponent,
        // canActivate: [AuthenticatedGuard],
      }
    ]
  },
  {
    path: 'support',
    component: SupportComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
