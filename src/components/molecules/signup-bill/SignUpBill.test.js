import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpBill from './SignUpBill';

test('renders without price an number of group members', () => {
  render(<SignUpBill />);
});

test('calculates total price correctly when there are no group members', () => {
  render(<SignUpBill eventPrice="10" />);
  const totalElement = screen.getAllByText('€10')[1];
  expect(totalElement).toBeInTheDocument();
});

test('calculates total price correctly when there are group members', () => {
  render(<SignUpBill eventPrice="10" numberOfGroupMembers={2} />);
  const totalElement = screen.getByText('€30');
  expect(totalElement).toBeInTheDocument();
});

test('does not render group members section when there are no group members', () => {
  render(<SignUpBill eventPrice="10" />);
  const groupMembersElement = screen.queryByText('Group Members');
  expect(groupMembersElement).toBeNull();
});

test('renders group members section when there are group members', () => {
  render(<SignUpBill eventPrice="10" numberOfGroupMembers={2} />);
  const groupMembersElement = screen.getByText('Group Members');
  expect(groupMembersElement).toBeInTheDocument();
});
