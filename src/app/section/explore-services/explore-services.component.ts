import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-services',
  templateUrl: './explore-services.component.html',
  styleUrls: ['./explore-services.component.css']
})
export class ExploreServicesComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;

  cardItems= [
    {
      title: 'Software Development',
      content:
        'To drive your company’s online success, our team delivers custom software solutions, crafting seamless digital experiences that elevate your business.',
    },

    {
      title: 'DevOps & Infrastructure',
      content:
        'To accelerate your company’s digital transformation, our team delivers robust DevOps and infrastructure solutions, building scalable, secure, and efficient systems that power your business.',
    },

    {
      title: 'Mobile App Development',
      content:
        'Empowering your business with cutting-edge mobile solutions, our team designs and develops custom apps that deliver seamless experiences and measurable impact.',
    },

    {
      title: 'Artificial Intelligence',
      content:
        'Unlocking the power of artificial intelligence, our team delivers custom AI solutions that transform data into actionable insights, automate processes, and drive innovation for your business.',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
