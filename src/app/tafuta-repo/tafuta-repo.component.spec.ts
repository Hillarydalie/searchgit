import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TafutaRepoComponent } from './tafuta-repo.component';

describe('TafutaRepoComponent', () => {
  let component: TafutaRepoComponent;
  let fixture: ComponentFixture<TafutaRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafutaRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafutaRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
