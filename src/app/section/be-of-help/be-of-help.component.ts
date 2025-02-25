import { Component, OnInit } from '@angular/core';
import { CalendlyService } from 'src/app/services/calendly.service';

@Component({
  selector: 'app-be-of-help',
  templateUrl: './be-of-help.component.html',
  styleUrls: ['./be-of-help.component.css'],
})
export class BeOfHelpComponent implements OnInit {
  constructor(private calendlyService: CalendlyService) {}

  openCalendly(): void {
    this.calendlyService.openCalendly(
      'https://calendly.com/abbaandking-sales/talk-with-our-sales-team'
    );
  }

  ngOnInit(): void {}
}
