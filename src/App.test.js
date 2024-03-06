import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);
  
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
})

test('plus button has correct text', () => {
  render(<App />);
  
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
})

test('When the + button is pressed, counter changes to 1', () => { 
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);

})

test('on/off button has blue color', () => {
  render(<App />);
  
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor : "blue"});
})

test('When the on/off button is pressed, prevent +,- button', () => { 
  render(<App />);
  const onoffbuttonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onoffbuttonElement);
  const plusbuttonElement = screen.getByTestId("plus-button");
  expect(plusbuttonElement).toBeDisabled();
  // const minusbuttonElement = screen.getByTestId("minus-button");
  // expect(minusbuttonElement).toBeDisabled();

})