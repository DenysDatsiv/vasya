import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageNameService } from "../../../../core/services/page-name.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  pageName: string;
  private routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageNameService: PageNameService,
    private location:Location
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.url.subscribe(segments => {
      const path = segments.map(segment => segment.path).join('/');
      this.pageName = this.pageNameService.getPageName(path);
    });
  }

  ngOnDestroy():void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  goBack() {
    this.location.back();
  }
}
