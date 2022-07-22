import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test("minus button has correct textContent", () => {
  render(<App />)
  const buttonElement = screen.getByTestId("minus-button");

  expect(buttonElement).toHaveTextContent("-");
})

test("plus button has correct textContent", () => {
  render(<App />)
  const buttonElement = screen.getByTestId("plus-button");

  expect(buttonElement).toHaveTextContent("+");
})

test("minus btn event work!", () => {
  render(<App />);
  const btnElement = screen.getByTestId("minus-button");
  fireEvent.click(btnElement);

  const countElement = screen.getByTestId("counter");
  expect(countElement).toHaveTextContent(1);
})

test("on/off button work!", () => {
  render(<App />);
  const toggleButton = screen.getByTestId("toggle-button");
  const btnElement = screen.getByTestId("minus-button");

  expect(toggleButton).toHaveTextContent("on");

  fireEvent.click(toggleButton);
  expect(btnElement).toBeDisabled();

  fireEvent.click(btnElement);
  fireEvent.click(btnElement);

  const countElement = screen.getByTestId("counter");
  expect(countElement).toHaveTextContent(0);
})

test("on/off button bgColor blue!", () => {
  render(<App />);
  const toggleButton = screen.getByTestId("toggle-button");

  expect(toggleButton).toHaveStyle({ backgroundColor: "blue" });
})
