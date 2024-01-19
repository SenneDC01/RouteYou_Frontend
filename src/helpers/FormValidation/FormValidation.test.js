import {
  isValidEmail,
  isPasswordFilled,
  isFilled,
  isEmpty,
  isValidPasswordLength,
  arrayOnlyNumber,
  isValidDateTime,
  isPositiveInteger,
  isImage,
} from './FormValidation';
import dayjs from 'dayjs';

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

  test('Check if array only contains numbers', () => {
    expect(arrayOnlyNumber(['12', 3])).toBe(true);
    expect(arrayOnlyNumber(['monkey', 3])).toBe(false);
    expect(arrayOnlyNumber(['1.1'])).toBe(false);
  });

  test('Check if date time is valid', () => {
    expect(isValidDateTime(dayjs('11-1-2012 20:00'))).toBe(true);
    expect(isValidDateTime(dayjs('1/dd/yyyy 11:mm'))).toBe(false);
  });

  test('Check if string is positive integer', () => {
    expect(isPositiveInteger('33')).toBe(true);
    expect(isPositiveInteger('1.1')).toBe(false);
    expect(isPositiveInteger('-1')).toBe(false);
  });

  test('Check type is image', () => {
    expect(isImage('image/jpg')).toBe(true);
    expect(isImage('image/png')).toBe(true);
    expect(isImage('application/pdf')).toBe(false);
  });
});
