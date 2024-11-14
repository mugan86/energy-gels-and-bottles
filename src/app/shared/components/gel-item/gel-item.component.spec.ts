import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelItemComponent } from './gel-item.component';

describe('GelItemComponent', () => {
  let component: GelItemComponent;
  let fixture: ComponentFixture<GelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GelItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
