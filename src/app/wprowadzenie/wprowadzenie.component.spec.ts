import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WprowadzenieComponent } from './wprowadzenie.component';

describe('WprowadzenieComponent', () => {
  let component: WprowadzenieComponent;
  let fixture: ComponentFixture<WprowadzenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WprowadzenieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WprowadzenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
