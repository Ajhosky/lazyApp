import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mymodule2Component } from './mymodule2.component';

describe('Mymodule2Component', () => {
  let component: Mymodule2Component;
  let fixture: ComponentFixture<Mymodule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mymodule2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mymodule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
