import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboadingMatIconComponent } from './onboading-mat-icon.component';

describe('OnboadingMatIconComponent', () => {
  let component: OnboadingMatIconComponent;
  let fixture: ComponentFixture<OnboadingMatIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboadingMatIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboadingMatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
