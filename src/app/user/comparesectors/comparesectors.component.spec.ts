import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparesectorsComponent } from './comparesectors.component';

describe('ComparesectorsComponent', () => {
  let component: ComparesectorsComponent;
  let fixture: ComponentFixture<ComparesectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparesectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparesectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
