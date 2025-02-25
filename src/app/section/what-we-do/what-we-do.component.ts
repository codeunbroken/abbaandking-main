import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { CalendlyService } from 'src/app/services/calendly.service';
@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css'],
})
export class WhatWeDoComponent implements OnInit {
  constructor(private calendlyService: CalendlyService) {}

  openCalendly(): void {
    this.calendlyService.openCalendly(
      'https://calendly.com/abbaandking-sales/talk-with-our-sales-team'
    );
  }

  ngOnInit(): void {
    AOS.init();
  }
}
