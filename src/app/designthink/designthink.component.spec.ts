import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignthinkComponent } from './designthink.component';

describe('DesignthinkComponent', () => {
  let component: DesignthinkComponent;
  let fixture: ComponentFixture<DesignthinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignthinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignthinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
