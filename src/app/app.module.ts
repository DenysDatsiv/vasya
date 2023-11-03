import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DriverRoutingModule } from "./core/modules/driver-routing.module";
import { BrokerRoutingModule } from "./core/modules/broker-routing.module";

import { AppRoutingModule } from './core/modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageOnDevelopingComponent }  from './content/shared/pages/informational/page-on-developing/page-on-developing.component';
import { PageNotFoundComponent } from './content/shared/pages/informational/page-not-found/page-not-found.component';
import { BrokerMainComponent } from './content/broker/pages/broker-main/broker-main.component';
import { DriverMainComponent } from './content/driver/pages/driver-main/driver-main.component';
import { LoginComponent } from './core/authentication/pages/login/login.component';
import { DriverAuthGuard } from "./core/guards/driver-auth.guard";
import { BrokerAuthGuard } from "./core/guards/broker-auth.guard";
import { DriverOrderComponent } from './content/driver/pages/driver-order/driver-order.component';
import { InformationAboutOrderComponent } from './content/shared/pages/information-about-order/information-about-order.component';
import { DriverTrackSpendingMainComponent } from './content/driver/pages/driver-track-spending-main/driver-track-spending-main.component';
import { DriverTrackSpendingAdditingComponent } from './content/driver/pages/driver-track-spending-additing/driver-track-spending-additing.component';
import { ChatMainComponent } from './content/shared/pages/chat-main/chat-main.component';
import { CoversationWithUserComponent } from './content/shared/pages/chat-main/coversation-with-user/coversation-with-user.component';
import {SettingsComponent} from './content/shared/pages/settings/settings.component';
import {AccountInformationComponent} from './content/shared/pages/account-information/account-information.component';
import { InformationChangingComponent } from './content/shared/pages/account-information/information-changing/information-changing.component';
import { SupportComponent } from './content/shared/pages/support/support.component';
import { MapWithDriversComponent } from './content/shared/pages/map-with-drivers/map-with-drivers.component';
import { ListWithDriversLocationsComponent } from './content/shared/pages/list-with-drivers-locations/list-with-drivers-locations.component';
import { AuthenticatedGuard } from "./core/guards/authenticated.guard";
import { BrokerOrdersComponent } from './content/broker/pages/broker-orders/broker-orders.component';
import { BrokerOrdersAddingComponent } from './content/broker/pages/broker-orders-adding/broker-orders-adding.component';
import { BrokerDriversListComponent } from './content/broker/pages/broker-drivers-list/broker-drivers-list.component';
import { BrokerDriversAddingComponent } from './content/broker/pages/broker-drivers-adding/broker-drivers-adding.component';
import { BrokerDriverDetailsComponent } from './content/broker/pages/broker-driver-details/broker-driver-details.component';
import { BrokerCarsListComponent } from './content/broker/pages/broker-cars-list/broker-cars-list.component';
import { BrokerDriverAddingComponent } from './content/broker/pages/broker-driver-adding/broker-driver-adding.component';
import { BrokerCarDetailsComponent } from './content/broker/pages/broker-car-details/broker-car-details.component';
import { BrokerCarReportComponent } from './content/broker/pages/broker-car-report/broker-car-report.component';
import { InvitationForDriverComponent } from './content/broker/pages/invitation-for-driver/invitation-for-driver.component';
import { FinesComponent } from './content/broker/pages/fines/fines.component';
import { FineDetailsComponent } from './content/broker/pages/fine-details/fine-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonMaterialModule} from "./core/modules/common-material.module";
import { SpinnerComponent } from './content/shared/components/spinner/spinner.component';
import { LogoComponent } from './content/shared/components/logo/logo.component';
import { InputComponent } from './content/shared/components/input/input.component';
import { ForgotPasswordComponent } from './core/authentication/pages/forgot-password/forgot-password.component';
import { ButtonComponent } from './content/shared/components/button/button.component';
import { PageHeaderComponent } from './content/shared/components/page-header/page-header.component';
import {HttpClientModule} from "@angular/common/http";
import { NavigationComponent } from './content/shared/components/navigation/navigation.component';
import { SideBarComponent } from './content/shared/components/navigation/side-bar/side-bar.component';
import { TabsComponent } from './content/shared/components/navigation/tabs/tabs.component';
import { WrapperWithNavigationComponent } from './content/shared/components/wrapper-with-navigation/wrapper-with-navigation.component';
import { AccountBtnComponent } from './content/shared/components/account-btn/account-btn.component';
import { OrderCardComponent } from './content/shared/components/order-card/order-card.component';
import { FilterComponent } from './content/shared/components/filter/filter.component';
import { SpendingFiltrationComponent } from './content/driver/components/spending-filtration/spending-filtration.component';
import { YearDropdownComponent } from './content/driver/components/year-dropdown/year-dropdown.component';
import { DayPickerComponent } from './content/driver/components/day-picker/day-picker.component';
import { CustomPickerComponent } from './content/driver/components/custom-picker/custom-picker.component';
import { AccordionComponent } from './content/shared/components/accordion/accordion.component';
import { OrderPickupDialogComponent } from './content/driver/components/order-pickup-dialog/order-pickup-dialog.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    PageOnDevelopingComponent,
    PageNotFoundComponent,
    BrokerMainComponent,
    DriverMainComponent,
    LoginComponent,
    DriverOrderComponent,
    InformationAboutOrderComponent,
    DriverTrackSpendingMainComponent,
    DriverTrackSpendingAdditingComponent,
    ChatMainComponent,
    CoversationWithUserComponent,
    SettingsComponent,
    AccountInformationComponent,
    InformationChangingComponent,
    SupportComponent,
    MapWithDriversComponent,
    ListWithDriversLocationsComponent,
    BrokerOrdersComponent,
    BrokerOrdersAddingComponent,
    BrokerDriversListComponent,
    BrokerDriversAddingComponent,
    BrokerDriverDetailsComponent,
    BrokerCarsListComponent,
    BrokerDriverAddingComponent,
    BrokerCarDetailsComponent,
    BrokerCarReportComponent,
    InvitationForDriverComponent,
    FinesComponent,
    FineDetailsComponent,
    SpinnerComponent,
    LogoComponent,
    InputComponent,
    ForgotPasswordComponent,
    ButtonComponent,
    PageHeaderComponent,
    NavigationComponent,
    SideBarComponent,
    TabsComponent,
    WrapperWithNavigationComponent,
    AccountBtnComponent,
    OrderCardComponent,
    FilterComponent,
    SpendingFiltrationComponent,
    YearDropdownComponent,
    DayPickerComponent,
    CustomPickerComponent,
    AccordionComponent,
    OrderPickupDialogComponent,
  ],
  imports: [
    FormsModule, // Make sure you have this line

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrokerRoutingModule,
    DriverRoutingModule,
    CommonMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    DriverAuthGuard,
    BrokerAuthGuard,
    AuthenticatedGuard
  ]
})
export class AppModule { }
