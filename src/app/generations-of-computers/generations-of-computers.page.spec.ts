import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerationsOfComputersPage } from './generations-of-computers.page';

describe('GenerationsOfComputersPage', () => {
  let component: GenerationsOfComputersPage;
  let fixture: ComponentFixture<GenerationsOfComputersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GenerationsOfComputersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
