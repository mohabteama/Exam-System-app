import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionsAnswers } from './add-questions-answers';

describe('AddQuestionsAnswers', () => {
  let component: AddQuestionsAnswers;
  let fixture: ComponentFixture<AddQuestionsAnswers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddQuestionsAnswers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuestionsAnswers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
