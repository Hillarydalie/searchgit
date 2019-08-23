import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TafutanavComponent } from './tafutanav.component';

describe('TafutanavComponent', () => {
  let component: TafutanavComponent;
  let fixture: ComponentFixture<TafutanavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafutanavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafutanavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
