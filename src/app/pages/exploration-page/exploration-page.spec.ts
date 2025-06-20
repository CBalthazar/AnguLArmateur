import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorationPage } from './exploration-page';

describe('ExplorationPage', () => {
  let component: ExplorationPage;
  let fixture: ComponentFixture<ExplorationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
