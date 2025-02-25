import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CalendlyService } from 'src/app/services/calendly.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() pageId = new EventEmitter();

  constructor(
    private calendlyService: CalendlyService,
    private router: Router
  ) {}

  openCalendly(): void {
    this.calendlyService.openCalendly(
      'https://calendly.com/abbaandking-sales/talk-with-our-sales-team'
    );
  }

  modal = false;
  id: boolean = false;

  ngOnInit(): void {}

  triggerModal() {
    this.modal = !this.modal;
  }

  // test(id: string){
  //   this.router.navigate(['/home'])
  //   this.navigate(id)
  // }

  // navigate(id: string) {
  //   this.router.navigate(['/home']).then(() => {
  //     // console.log(id);
  //     this.pageId.emit(id);
  //   });
  

  //   this.modal = false;
  // }

  // navigate(route: string, scrollToSelector?: string) {
  //   this.router.navigate([route]).then(() => {
  //     if (scrollToSelector) {
  //       const element = document.getElementById(scrollToSelector);
  //       if (element) {
  //         element.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     }
  //   });
  // }
}
