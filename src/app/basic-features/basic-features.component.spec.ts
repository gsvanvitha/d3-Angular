import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFeaturesComponent } from './basic-features.component';

describe('BasicFeaturesComponent', () => {
  let component: BasicFeaturesComponent;
  let fixture: ComponentFixture<BasicFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
