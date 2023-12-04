import { isValidEmail, isPasswordFilled } from './FormValidation';

describe('Form Validation', () => {
    test('Validates email correctly', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
        expect(isValidEmail('invalid_email')).toBe(false);
    });

    test('Checks if password is filled', () => {
        expect(isPasswordFilled('password')).toBe(true);
        expect(isPasswordFilled('')).toBe(false);
    });
});