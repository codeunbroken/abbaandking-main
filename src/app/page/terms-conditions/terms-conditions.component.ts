import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css'],
})
export class TermsConditionsComponent implements OnInit {
  constructor(private router: Router) {}

  id: boolean;

  ngOnInit(): void {
    this.id = true;
  }

  navigate(route: string, scrollTo?: string) {
    this.router.navigate([route], { fragment: scrollTo });
}
}
