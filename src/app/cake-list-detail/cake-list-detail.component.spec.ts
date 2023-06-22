import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeListDetailComponent } from './cake-list-detail.component';

describe('CakeListDetailComponent', () => {
  let component: CakeListDetailComponent;
  let fixture: ComponentFixture<CakeListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeListDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
