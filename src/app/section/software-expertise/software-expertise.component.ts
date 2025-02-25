import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-expertise',
  templateUrl: './software-expertise.component.html',
  styleUrls: ['./software-expertise.component.css'],
})
export class SoftwareExpertiseComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  constructor() {}

  cardItems= [
    {
      title: 'Start-ups',
      content:
        'We help startups validate their ideas through design prototypes and MVP development. Our experienced team acts as your trusted digital partner, guiding you from concept to execution with precision and expertise.',
    },

    {
      title: 'SME’s',
      content:
        'Whether you’re creating a new digital product or transforming an existing one, our award-winning software development team is here to help. We design, build, and launch scalable solutions that grow with your business',
    },

    {
      title: 'Large Enterprise',
      content:
        'With experience spanning diverse industries, we specialise in identifying your unique challenges and crafting bespoke software solutions that deliver results.',
    },
  ];

  ngOnInit(): void {}
}
