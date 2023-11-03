import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy {
  @Input() isSidenavOpen = false;
  @Output() isSidenavOpenChange = new EventEmitter<boolean>();
  activeTabIndex:number = 0;
  tabs = [
    { icon: 'home', label: 'Home', route: '/driver/main' },
    { icon: 'file_copy', label: 'Orders', route: '/driver/waybills/list' },
    { icon: 'chat_bubble_outline', label: 'Chat', route: '/messages' },
  ];

  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.routeSubscription = this.route.url.subscribe(segments => {
      const currentRoute = segments.join('/');
      this.setActiveTabIndex(currentRoute);
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  handleTabClick(route: string, index: number) {
    if (!this.isSidenavOpen && route) {
      this.router.navigate([route]);
      this.activeTabIndex = index;
    }
  }

  toggleSidebar() {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.isSidenavOpenChange.emit(this.isSidenavOpen);
  }

  private setActiveTabIndex(currentRoute: string) {
    const matchingTab = this.tabs.find(tab =>
      tab.route === `/driver/${currentRoute}`
      || tab.route === `/${currentRoute}`
    );

    if (matchingTab) {
      this.activeTabIndex = this.tabs.indexOf(matchingTab);
    }
  }
}
