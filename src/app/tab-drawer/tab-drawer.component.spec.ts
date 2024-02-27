import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDrawerComponent } from './tab-drawer.component';

describe('TabDrawerComponent', () => {
  let component: TabDrawerComponent;
  let fixture: ComponentFixture<TabDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabDrawerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
