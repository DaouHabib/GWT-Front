import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrovansComponent } from './electrovans.component';

describe('ElectrovansComponent', () => {
  let component: ElectrovansComponent;
  let fixture: ComponentFixture<ElectrovansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectrovansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectrovansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
