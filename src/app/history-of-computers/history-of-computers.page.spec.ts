import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryOfComputersPage } from './history-of-computers.page';

describe('HistoryOfComputersPage', () => {
  let component: HistoryOfComputersPage;
  let fixture: ComponentFixture<HistoryOfComputersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistoryOfComputersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
