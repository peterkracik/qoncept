import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return normalized data', () => {
    const testData = [
      {
        key: 'Min', element_values:
          [{ key: 'C', value: 0.12 }, { key: 'Si', value: 0.35 }]
      },
      {
        key: 'Max', element_values:
          [{ key: 'Si', value: 0.14 }, { key: 'C', value: 0.45 }]
      },
    ];

    const expectedData = [
      {
        key: 'Min', element_values:
          [{ key: 'C', value: 0.12 }, { key: 'Si', value: 0.35 }]
      },
      {
        key: 'Max', element_values:
          [{ key: 'C', value: 0.45 }, { key: 'Si', value: 0.14 }]
      },
    ];
    const normalizedData = service.normalizeData(testData);
    expect(normalizedData).toEqual(expectedData);
  });

  it('should return empty array', () => {
    const testData = [];
    const normalizedData = service.normalizeData(testData);
    expect(normalizedData).toEqual([]);
  });
});
