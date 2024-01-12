import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypesOfComputerMemoryPage } from './types-of-computer-memory.page';

describe('TypesOfComputerMemoryPage', () => {
  let component: TypesOfComputerMemoryPage;
  let fixture: ComponentFixture<TypesOfComputerMemoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypesOfComputerMemoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
