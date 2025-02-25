import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {


constructor(private router: Router) { }





  id: boolean;

  ngOnInit(): void {
    this.id = true;
  }

  navigate(route: string, scrollTo?: string) {
    this.router.navigate([route], { fragment: scrollTo });
}


}
