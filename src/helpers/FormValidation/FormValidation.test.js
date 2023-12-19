import {
  isValidEmail,
  isPasswordFilled,
  isFilled,
  isEmpty,
  isValidPasswordLength,
} from './FormValidation';

describe('Form Validation', () => {
  test('Validates email correctly', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid_email')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });

  test('Checks if password is filled', () => {
    expect(isPasswordFilled('password')).toBe(true);
    expect(isPasswordFilled('')).toBe(false);
  });

  test('returns true for non-empty strings', () => {
    expect(isFilled('non-empty string')).toBe(true);
  });

  test('returns false for empty strings', () => {
    expect(isFilled('')).toBe(false);
  });

  test('returns true for an empty object', () => {
    const emptyObject = {};
    expect(isEmpty(emptyObject)).toBe(true);
  });

  test('returns false for a non-empty object', () => {
    const nonEmptyObject = { key: 'value' };
    expect(isEmpty(nonEmptyObject)).toBe(false);
  });

  test('Checks if password has a length of 8 characters', () => {
    expect(isValidPasswordLength('password')).toBe(true);
    expect(isValidPasswordLength('short')).toBe(false);
  });
});
