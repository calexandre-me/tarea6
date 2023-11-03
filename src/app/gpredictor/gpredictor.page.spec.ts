import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GpredictorPage } from './gpredictor.page';

describe('GpredictorPage', () => {
  let component: GpredictorPage;
  let fixture: ComponentFixture<GpredictorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GpredictorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
