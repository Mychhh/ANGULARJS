import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTitleComponent } from './generate-title.component';

describe('GenerateTitleComponent', () => {
  let component: GenerateTitleComponent;
  let fixture: ComponentFixture<GenerateTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
