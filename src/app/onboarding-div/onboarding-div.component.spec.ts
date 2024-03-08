import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingDivComponent } from './onboarding-div.component';

describe('OnboardingDivComponent', () => {
  let component: OnboardingDivComponent;
  let fixture: ComponentFixture<OnboardingDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingDivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
