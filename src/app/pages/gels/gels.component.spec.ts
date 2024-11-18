import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelsComponent } from './gels.component';

describe('GelsComponent', () => {
  let component: GelsComponent;
  let fixture: ComponentFixture<GelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
