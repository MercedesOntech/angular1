import { MayusculasPipe } from './mayusculas-pipe';

describe('MayusculasPipe', () => {
  const pipe = new MayusculasPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform text to uppercase', () => {
    expect(pipe.transform('hola')).toBe('HOLA');
    expect(pipe.transform('Angular 21')).toBe('ANGULAR 21');
  });

  it('should return empty string for null or undefined', () => {
    expect(pipe.transform(null as any)).toBe('');
    expect(pipe.transform(undefined as any)).toBe('');
  });
});