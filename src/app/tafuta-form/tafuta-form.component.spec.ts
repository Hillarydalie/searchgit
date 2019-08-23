import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TafutaFormComponent } from './tafuta-form.component';

describe('TafutaFormComponent', () => {
  let component: TafutaFormComponent;
  let fixture: ComponentFixture<TafutaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafutaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafutaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
