import { Component, OnInit } from '@angular/core';
import { CalendlyService } from 'src/app/services/calendly.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor(private calendlyService: CalendlyService) {}

  openCalendly(): void {
    this.calendlyService.openCalendly(
      'https://calendly.com/abbaandking-sales/talk-with-our-sales-team'
    );
  }

  ngOnInit(): void {}
}
