import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuniversidadPage } from './buniversidad.page';

describe('BuniversidadPage', () => {
  let component: BuniversidadPage;
  let fixture: ComponentFixture<BuniversidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuniversidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
