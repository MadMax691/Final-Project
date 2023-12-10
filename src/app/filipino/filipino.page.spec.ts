import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilipinoPage } from './filipino.page';

describe('FilipinoPage', () => {
  let component: FilipinoPage;
  let fixture: ComponentFixture<FilipinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FilipinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
