import '@testing-library/jest-dom';
import SignUpPage from './page';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-test-renderer';
import * as EventService from '@/services/EventService';

describe('SignUpPage', () => {
  const mockEvent = {
    name: 'Test Event',
    id: '1',
  };

  it('renders correctly', () => {
    render(<SignUpPage event={mockEvent} />);
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(
      screen.getByText(
        `Register for ${mockEvent.name}. For groups or families it is possible to register multiple group members.`
      )
    ).toBeInTheDocument();
  });

  it('adds group members when button is clicked', () => {
    render(<SignUpPage event={mockEvent} />);
    fireEvent.click(screen.getByText('Add group members'));
    expect(screen.getByText('Member 1')).toBeInTheDocument();
  });

  it('adds group member to the list when button is clicked', () => {
    render(<SignUpPage event={mockEvent} />);
    fireEvent.click(screen.getByText('Add group members'));
    fireEvent.click(screen.getByText('Add group member'));
    expect(screen.getByText('Member 2')).toBeInTheDocument();
  });

  it('removes the group member list then list has 1 item and remove button is clicked', () => {
    render(<SignUpPage event={mockEvent} />);
    fireEvent.click(screen.getByText('Add group members'));
    fireEvent.click(screen.getByText('Remove'));
    expect(screen.queryByText('Member 1')).not.toBeInTheDocument();
  });

  it('removes a group member from the list when button is clicked', () => {
    render(<SignUpPage event={mockEvent} />);
    fireEvent.click(screen.getByText('Add group members'));
    fireEvent.click(screen.getByText('Add group member'));
    fireEvent.click(screen.getAllByText('Remove')[1]);
    expect(screen.queryByText('Member 2')).not.toBeInTheDocument();
  });

  let mockSignUp;

  beforeEach(() => {
    mockSignUp = jest.spyOn(EventService, 'signUpEvent');
    mockSignUp.mockImplementation(() => Promise.resolve());
  });

  afterEach(() => {
    mockSignUp.mockRestore();
  });

  it('validates form fields and handles form submission with valid form data', async () => {
    render(<SignUpPage event={mockEvent} />);
    fireEvent.click(screen.getByText('Add group members'));

    const groupMember = {
      firstname: 'Test',
      lastname: 'Test',
      email: 'test@test.be',
    };

    await act(async () => {
      fireEvent.change(screen.getByLabelText('Firstname'), {
        target: { value: groupMember.firstname },
      });
      fireEvent.change(screen.getByLabelText('Lastname'), {
        target: { value: groupMember.lastname },
      });
      fireEvent.change(screen.getByLabelText('Email'), {
        target: { value: groupMember.email },
      });

      fireEvent.click(screen.getByRole('button', { name: 'Sign up' }));
    });
    expect(mockSignUp).toHaveBeenCalled();
  });

  it('validates form fields and handles form submission with invalid form data', async () => {
    render(<SignUpPage event={mockEvent} />);
    fireEvent.click(screen.getByText('Add group members'));

    const groupMember = {
      firstname: '',
      lastname: '',
      email: '',
    };

    await act(async () => {
      fireEvent.change(screen.getByLabelText('Firstname'), {
        target: { value: groupMember.firstname },
      });
      fireEvent.change(screen.getByLabelText('Lastname'), {
        target: { value: groupMember.lastname },
      });
      fireEvent.change(screen.getByLabelText('Email'), {
        target: { value: groupMember.email },
      });

      fireEvent.click(screen.getByRole('button', { name: 'Sign up' }));
    });
    expect(mockSignUp).not.toHaveBeenCalled();
  });
});
