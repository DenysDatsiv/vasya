import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../../../core/authentication/auth.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit{
  constructor(private router:Router ,private authService:AuthService) {
  }
  backToMain()
  {    const userRole =this.authService.getUserRole();
    this.router.navigate([`/${userRole}/main`])
  }

  ngOnInit(): void {
  }
}
