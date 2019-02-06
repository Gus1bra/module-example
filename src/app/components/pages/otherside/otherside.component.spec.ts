import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersideComponent } from './otherside.component';

describe('OthersideComponent', () => {
  let component: OthersideComponent;
  let fixture: ComponentFixture<OthersideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
