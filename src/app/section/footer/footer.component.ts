import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() socialsImage: string;
  @Input() socialsLinks: string;
  @Input() anchorLinks: string;




  constructor() {}

  ngOnInit(): void {}

  @Output() pageId = new EventEmitter();

  onPageClick(sectionId: string): void {
    this.pageId.emit(sectionId); // Send the section ID to the parent component
  }
}
