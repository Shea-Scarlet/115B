import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDrawerButtonComponent } from './tab-drawer-button.component';

describe('TabDrawerButtonComponent', () => {
  let component: TabDrawerButtonComponent;
  let fixture: ComponentFixture<TabDrawerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabDrawerButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabDrawerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
