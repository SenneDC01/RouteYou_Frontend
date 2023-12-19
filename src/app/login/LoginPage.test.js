import { render, fireEvent } from '@testing-library/react';
import LoginPage from './page';
import * as UserService from '@/services/UserService';
import { act } from 'react-test-renderer';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('LoginPage component', () => {
  let mockLogin;

  beforeEach(() => {
    mockLogin = jest.spyOn(UserService, 'login');
    mockLogin.mockImplementation(() => Promise.resolve());
  });

  afterEach(() => {
    mockLogin.mockRestore();
  });

  it('Log in with valid credentials', async () => {
    const { getByLabelText, getByRole } = render(<LoginPage />);
    const email = 'test@example.com';
    const password = 'password123';

    await act(async () => {
      fireEvent.change(getByLabelText('Email'), {
        target: { value: email },
      });
      fireEvent.change(getByLabelText('Password'), {
        target: { value: password },
      });

      fireEvent.click(getByRole('button', { name: 'Login' }));
    });

    expect(mockLogin).toHaveBeenCalled();
    expect(mockLogin).toHaveBeenCalledWith({
      email: email,
      password: password,
    });
  });
});
