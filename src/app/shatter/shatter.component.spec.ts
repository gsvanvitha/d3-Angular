import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShatterComponent } from './shatter.component';

describe('ShatterComponent', () => {
  let component: ShatterComponent;
  let fixture: ComponentFixture<ShatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
