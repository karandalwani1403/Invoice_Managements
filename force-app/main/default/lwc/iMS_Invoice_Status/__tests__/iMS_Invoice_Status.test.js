import {sum} from '../iMS_Invoice_Status';
//import IMS_Invoice_Status from 'c/iMS_Invoice_Status';

describe('sum()', () => {
  it('should add 1 and 2 returning 3', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2)).not.toBeGreaterThan(3);
  });
});