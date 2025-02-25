import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css'],
})
export class FeaturedProductsComponent implements OnInit {
  products = [
    {
      image: '/assets/accountable.png',
      title: 'Accountable',
      description: `Accountable ERP is more than just software—it’s your partner in growth.Why Choose Accountable ERP?  <br> <br><strong>Accounting:</strong> Take control of your finances with real-time insights and seamless reporting <br><br> <strong>Human Resources:</strong> Manage your workforce efficiently with tools for payroll, attendance, and performance tracking.<br><br><strong>Sales:</strong>  Boost revenue with streamlined sales processes, customer management, and actionable analytics. <br><br> <strong>Inventory:</strong> Optimize stock levels, reduce waste, and ensure timely deliveries with advanced inventory management. <br><br><strong>Procurement:</strong>  Simplify purchasing, vendor management, and cost control with smart procurement tools. <br><br><strong>Fleet Management:</strong>  Track, manage, and maintain your fleet with precision, ensuring efficiency and cost savings.`,
    },

    {
      image: '/assets/insurebility.png',
      title: 'Insurebility',
      description: `Trusted platform for all Insurance needs. Our focus is to simplify and offer one-stop solution for all your Insurance needs  <br> <br> Explore Our Products <br><br><strong>General Insurance:</strong> Comprehensive coverage for your property, vehicles, and valuables <br><br> <strong>Life Insurance:</strong> Flexible plans to secure your future and protect your loved ones.<br><br><strong>Insurance Brokerage:</strong> Access top-tier policies from leading providers, tailored to your needs. <br><br> Insurebility combines cutting-edge technology with expert guidance to streamline your insurance journey. `,
    },

    {
      image: '/assets/abbaTech.png',
      title: 'Abba Tech School',
      description: `TechEdu Platform that equip young individuals with the exact skills Top companies are hiring for, build a portfolio that stands out, and land your dream career in 2-6 months.   <br> <br> What we offer:<br><br><strong>Product Design:</strong> Learn to create intuitive, user-centered designs that drive product success. <br><br> <strong>Frontend Development:</strong> Build responsive, interactive websites with modern tools and frameworks.<br><br><strong>Backend Development:</strong> Master server-side technologies to develop robust, scalable applications. <br><br><strong>Video Editing:</strong> Acquire professional-grade skills to produce engaging and polished videos. <br><br> Abba Tech School combines cutting-edge curriculum with expert mentorship to accelerate your journey into the tech industry `,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1,
    },

    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
