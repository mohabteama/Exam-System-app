import { TestBed } from '@angular/core/testing';
import { AddQuestionsAnswers } from '../../htmlComponents/add-questions-answers/add-questions-answers';


describe('AddQuestionsAnswers', () => {
  let service: AddQuestionsAnswers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddQuestionsAnswers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
