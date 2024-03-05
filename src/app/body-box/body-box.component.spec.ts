import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBoxComponent } from './body-box.component';

describe('BodyBoxComponent', () => {
  let component: BodyBoxComponent;
  let fixture: ComponentFixture<BodyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
