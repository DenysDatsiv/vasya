import { Component, ViewChild, Input } from '@angular/core';
import { sidebarRoutes } from '../../../../../core/sidebar_nav/_navDriver';
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidebarRoutes = sidebarRoutes;
  @Input() isSidenavOpen: boolean;

  logout():void {
    console.log("person is logged out")
  }

}
