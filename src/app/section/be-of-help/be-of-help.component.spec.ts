import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeOfHelpComponent } from './be-of-help.component';

describe('BeOfHelpComponent', () => {
  let component: BeOfHelpComponent;
  let fixture: ComponentFixture<BeOfHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeOfHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeOfHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
