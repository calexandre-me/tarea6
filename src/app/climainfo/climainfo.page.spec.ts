import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClimainfoPage } from './climainfo.page';

describe('ClimainfoPage', () => {
  let component: ClimainfoPage;
  let fixture: ComponentFixture<ClimainfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClimainfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
