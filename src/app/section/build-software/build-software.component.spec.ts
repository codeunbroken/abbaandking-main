import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSoftwareComponent } from './build-software.component';

describe('BuildSoftwareComponent', () => {
  let component: BuildSoftwareComponent;
  let fixture: ComponentFixture<BuildSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
