import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}

  id: boolean;

  ngOnInit(): void {
    this.id = true;
  }

  ngAfterViewInit(): void {
    const fragment = window.location.hash.substring(1);
    if (fragment) {
      console.log();
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }

  navigate(route: string, scrollToSelector?: string) {
    this.router.navigate([route]).then(() => {
      if (scrollToSelector) {
        const element = document.getElementById(scrollToSelector);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  navigateToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
