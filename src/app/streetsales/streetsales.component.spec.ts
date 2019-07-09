import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetsalesComponent } from './streetsales.component';

describe('StreetsalesComponent', () => {
  let component: StreetsalesComponent;
  let fixture: ComponentFixture<StreetsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
