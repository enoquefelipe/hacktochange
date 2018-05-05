import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorEstrategiaComponent } from './gerador-estrategia.component';

describe('GeradorEstrategiaComponent', () => {
  let component: GeradorEstrategiaComponent;
  let fixture: ComponentFixture<GeradorEstrategiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeradorEstrategiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeradorEstrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
