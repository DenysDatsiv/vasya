import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @Input() isSidenavOpen: boolean = false;
  @Output() isSidenavOpenChange = new EventEmitter<boolean>();

  handleSidenavOpenChange(isSidenavOpen: boolean):void {
    this.isSidenavOpen = isSidenavOpen;
    this.isSidenavOpenChange.emit(this.isSidenavOpen);;
  }

}
