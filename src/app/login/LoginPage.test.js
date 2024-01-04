import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginPage from './page';
import * as UserService from '@/services/UserService';
import { act } from 'react-test-renderer';

const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: mockPush,
    };
  },
}));

describe('LoginPage component', () => {
  let mockLogin;

  beforeEach(() => {
    mockLogin = jest.spyOn(UserService, 'login');
    mockLogin.mockImplementation(() => Promise.resolve({ code: 200 }));
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
    expect(mockPush).toHaveBeenCalled();
  });

  it('Log in with invalid credentials', async () => {
    const { getByLabelText, getByRole } = render(<LoginPage />);
    const email = '';
    const password = '';

    await act(async () => {
      fireEvent.change(getByLabelText('Email'), {
        target: { value: email },
      });
      fireEvent.change(getByLabelText('Password'), {
        target: { value: password },
      });

      fireEvent.click(getByRole('button', { name: 'Login' }));
    });

    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('Log in with valid credentials but credentials are not known', async () => {
    mockLogin = jest.spyOn(UserService, 'login');
    mockLogin.mockImplementation(() =>
      Promise.resolve({
        code: 401,
        message: 'The provided credentials are incorrect',
      })
    );

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
    expect(
      screen.getByText('The provided credentials are incorrect')
    ).toBeInTheDocument();

    mockLogin.mockRestore();
  });

  it('Log in with valid credentials but API returns 500 code', async () => {
    mockLogin = jest.spyOn(UserService, 'login');
    mockLogin.mockImplementation(() => Promise.reject());

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
    expect(
      screen.getByText('Something went wrong try again later')
    ).toBeInTheDocument();

    mockLogin.mockRestore();
  });
});
