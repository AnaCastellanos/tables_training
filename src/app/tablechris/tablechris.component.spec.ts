import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablechrisComponent } from './tablechris.component';

describe('TablechrisComponent', () => {
  let component: TablechrisComponent;
  let fixture: ComponentFixture<TablechrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablechrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablechrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
