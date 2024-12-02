import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: boolean = false

  content = [
    {
    testimonial: "We were in need of Abba and King Systems, and they delievered. Without them, we would not have been able to complete our move or implement MPLS. They are all in, sleeves rolled up, ready to take on every challenge and opportunity as they present themselves.",
    name: "Idris Abdulwahab ",
    pageNumber: 1
  },
    {
    testimonial: "Over the years, Abba and King Systems has been a reliable partner. Their cutting-edge technology has greatly aided us in streamlining our operational procedures and improving the customer experience. They are consistently on time and eager to go above and beyond to help us grow our businesses.",
    name: "Omawumi Ademola",
    pageNumber: 2
  },
    {
    testimonial: "Working with Abba and King Systems has been an amazing experience. Their work ethics has given us more confidence in the way we deliver services to customers. Their support team is one of the best i have ever engaged",
    name: "John Mathew",
    pageNumber: 3
  },
]

  title = 'abbaandking';


  ngOnInit(): void {
    AOS.init()
  }

  modal(){
    this.id = !this.id
  }


}
