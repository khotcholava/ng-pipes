import { IsArrayOfObjectPipe } from './is-array-of-object.pipe';

describe('IsArrayOfObjectPipe', () => {
  it('create an instance', () => {
    const pipe = new IsArrayOfObjectPipe();
    expect(pipe).toBeTruthy();
  });
});
