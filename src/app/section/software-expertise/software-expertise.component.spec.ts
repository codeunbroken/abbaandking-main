import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareExpertiseComponent } from './software-expertise.component';

describe('SoftwareExpertiseComponent', () => {
  let component: SoftwareExpertiseComponent;
  let fixture: ComponentFixture<SoftwareExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareExpertiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
