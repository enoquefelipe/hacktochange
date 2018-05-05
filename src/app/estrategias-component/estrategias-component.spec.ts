import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiasComponentComponent } from './estrategias-component.component';

describe('EstrategiasComponentComponent', () => {
  let component: EstrategiasComponentComponent;
  let fixture: ComponentFixture<EstrategiasComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrategiasComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrategiasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
