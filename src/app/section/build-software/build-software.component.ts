import { Component, Input, OnInit } from '@angular/core';
import { CalendlyService } from 'src/app/services/calendly.service';

@Component({
  selector: 'app-build-software',
  templateUrl: './build-software.component.html',
  styleUrls: ['./build-software.component.css'],
})
export class BuildSoftwareComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;

  rainbowItem = [
    {
      title: 'We listen to your needs',
      content:
        'We open our minds to understand your needs. Its our first step of showing you how committed we are.',
    },
    {
      title: 'Project discovery',
      content:
        'We help you to explore the most viable approach to solve your needs and also provides you with exciting ideas',
    },
    {
      title: 'Storming our brains',
      content:
        'Understanding your business domain is critical to us, we go the extra mile with our thinking caps on',
    },
    {
      title: 'Getting there',
      content:
        'We are agile in development and design, keeping you in the loop as your product evolves',
    },
    {
      title: 'Delivering the product',
      content:
        'Continuous delivery is critical to your product and we have set up our teams to deliver quality products always',
    },
  ];

  constructor(private calendlyService: CalendlyService) {}

  openCalendly(): void {
    this.calendlyService.openCalendly(
      'https://calendly.com/abbaandking-sales/talk-with-our-sales-team'
    );
  }

  ngOnInit(): void {}
}
