import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyShopsListComponent } from './nearby-shops-list.component';

describe('NearbyShopsListComponent', () => {
  let component: NearbyShopsListComponent;
  let fixture: ComponentFixture<NearbyShopsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyShopsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyShopsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
