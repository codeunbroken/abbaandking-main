import { Injectable } from '@angular/core';
declare const Calendly: any;

@Injectable({
  providedIn: 'root',
})
export class CalendlyService {
  
  constructor() {}

  openCalendly(url: string): void {
    if (typeof Calendly !== 'undefined') {
      Calendly.initPopupWidget({ url });
    } else {
      console.error('Calendly script is not loaded.');
    }
  }
}
