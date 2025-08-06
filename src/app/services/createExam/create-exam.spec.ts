import { TestBed } from '@angular/core/testing';

import { CreateExam } from './create-exam';

describe('CreateExam', () => {
  let service: CreateExam;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateExam);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
