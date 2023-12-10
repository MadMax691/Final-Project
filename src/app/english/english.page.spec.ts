import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnglishPage } from './english.page';

describe('EnglishPage', () => {
  let component: EnglishPage;
  let fixture: ComponentFixture<EnglishPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(EnglishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
