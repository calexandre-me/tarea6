import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpredictorPage } from './epredictor.page';

describe('EpredictorPage', () => {
  let component: EpredictorPage;
  let fixture: ComponentFixture<EpredictorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EpredictorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
