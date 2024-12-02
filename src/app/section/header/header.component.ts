import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  id: boolean = false;
  constructor(
    public router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {}

  modal() {
    this.id = !this.id;
  }

  // scroll(id: any) {
  //   this.id = !this.id;
  //   let target = this.document.getElementById(id);
  //   target.scrollIntoView(true);
  // }

  scroll(id: string) {
    this.id = !this.id;
  
    if (this.router.url === '/') {
      const target = this.document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      this.router.navigate(['/'], { fragment: id }).then(() => {
        const target = this.document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
}
