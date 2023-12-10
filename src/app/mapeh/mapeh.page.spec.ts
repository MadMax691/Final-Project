import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAPEHPage } from './mapeh.page';

describe('MAPEHPage', () => {
  let component: MAPEHPage;
  let fixture: ComponentFixture<MAPEHPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MAPEHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
