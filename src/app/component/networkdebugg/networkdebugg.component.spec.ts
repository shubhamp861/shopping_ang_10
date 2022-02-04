import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkdebuggComponent } from './networkdebugg.component';

describe('NetworkdebuggComponent', () => {
  let component: NetworkdebuggComponent;
  let fixture: ComponentFixture<NetworkdebuggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkdebuggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkdebuggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
