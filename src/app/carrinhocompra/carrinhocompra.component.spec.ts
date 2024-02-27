import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhocompraComponent } from './carrinhocompra.component';

describe('CarrinhocompraComponent', () => {
  let component: CarrinhocompraComponent;
  let fixture: ComponentFixture<CarrinhocompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrinhocompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrinhocompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
