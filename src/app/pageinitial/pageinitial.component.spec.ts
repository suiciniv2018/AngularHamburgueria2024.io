import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageinitialComponent } from './pageinitial.component';

describe('PageinitialComponent', () => {
  let component: PageinitialComponent;
  let fixture: ComponentFixture<PageinitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageinitialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageinitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
