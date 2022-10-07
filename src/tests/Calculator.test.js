import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  //get the test to press 1, press add, press 4, press =, 
  //and check that once it has done those things the state of calculatedTotal is 5
  it('should add two numbers together', () => {
    const button1 = container.getByTestId('number1');
    const addButton = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4')
    const equalsButton = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should subtract one number from the other', () => {
    const button7 = container.getByTestId('number7');
    const subtractButton = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4')
    const equalsButton = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should mulitply two numbers', () => {
    const button3 = container.getByTestId('number3');
    const multiplyButton = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5')
    const equalsButton = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should divide two numbers', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const divideButton = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7')
    const equalsButton = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should concatenate mulitiple number button clicks', () => {
    const button1 = container.getByTestId('number1');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual('11')
  })

  it('should chain mulitple operations together', () => {
    const button1 = container.getByTestId('number1');
    const addButton = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4')
    const subtractButton = container.getByTestId('operator-subtract');
    const equalsButton = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(subtractButton);
    fireEvent.click(button1)
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('8')
  })

  it('should clear the running total without affecting the calculation', () => {
    const button5 = container.getByTestId('number5');
    const addButton = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4')
    const equalsButton = container.getByTestId('operator-equals')
    const clearButton = container.getByTestId('clear')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button5);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(clearButton);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('9')
  })





});


