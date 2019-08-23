import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TafutaComponent } from './tafuta.component';

describe('TafutaComponent', () => {
  let component: TafutaComponent;
  let fixture: ComponentFixture<TafutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
