import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-wrapper-with-navigation',
  templateUrl: './wrapper-with-navigation.component.html',
  styleUrls: ['./wrapper-with-navigation.component.scss']
})
export class WrapperWithNavigationComponent {
  @Input()isSidenavOpen:boolean=false;

  handleSidenavOpenChange(isSidenavOpen: boolean):void
  {
    this.isSidenavOpen= isSidenavOpen
  }
  closeSidebar():void
  {
    this.isSidenavOpen = false;
  }
}
