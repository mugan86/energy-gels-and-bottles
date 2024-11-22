import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelRecommendationsComponent } from './gel-recommendations.component';

describe('GelRecommendationsComponent', () => {
  let component: GelRecommendationsComponent;
  let fixture: ComponentFixture<GelRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GelRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GelRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
