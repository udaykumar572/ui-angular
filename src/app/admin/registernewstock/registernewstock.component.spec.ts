import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternewstockComponent } from './registernewstock.component';

describe('RegisternewstockComponent', () => {
  let component: RegisternewstockComponent;
  let fixture: ComponentFixture<RegisternewstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisternewstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisternewstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
