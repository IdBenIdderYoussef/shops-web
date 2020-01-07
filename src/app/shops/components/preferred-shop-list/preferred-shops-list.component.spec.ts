import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredShopsListComponent } from './preferred-shops-list.component';

describe('PreferedShopComponent', () => {
  let component: PreferredShopsListComponent;
  let fixture: ComponentFixture<PreferredShopsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferredShopsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferredShopsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
