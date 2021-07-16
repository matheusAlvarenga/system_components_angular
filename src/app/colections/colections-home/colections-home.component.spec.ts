import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionsHomeComponent } from './colections-home.component';

describe('ColectionsHomeComponent', () => {
  let component: ColectionsHomeComponent;
  let fixture: ComponentFixture<ColectionsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
