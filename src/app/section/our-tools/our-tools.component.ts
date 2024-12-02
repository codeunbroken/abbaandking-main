import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-our-tools',
  templateUrl: './our-tools.component.html',
  styleUrls: ['./our-tools.component.css']
})
export class OurToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()

  }

}
