import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherSectionComponent } from './together-section.component';

describe('TogetherSectionComponent', () => {
  let component: TogetherSectionComponent;
  let fixture: ComponentFixture<TogetherSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogetherSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogetherSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
