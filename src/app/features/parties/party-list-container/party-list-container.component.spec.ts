import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyListContainerComponent } from './party-list-container.component';

describe('PartyListContainerComponent', () => {
  let component: PartyListContainerComponent;
  let fixture: ComponentFixture<PartyListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
