import { useEffect, useState } from "react";
import Button from "../components/Button";
import "./App.css";

/**
 * CalculatorComponent is a functional component that represents a calculator.
 * It manages the current input, operator, and previous input states.
 * It also provides methods for updating the display, clearing the display,
 * appending numbers and decimals, setting the operator, and performing calculations.
 *
 * @returns {JSX.Element} The calculator component.
 */

const CalculatorComponent = () => {
  /**
   * CalculatorComponent is a functional component that represents a calculator.
   * It manages the current input, operator, and previous input states.
   * It also provides methods for updating the display, clearing the display,
   * appending numbers and decimals, setting the operator, and performing calculations.
   */

  const [currentInput, setCurrentInput] = useState("");
  const [operator, setOperator] = useState("");
  const [previousInput, setPreviousInput] = useState("");

  /**
   * Updates the display with the current input value.
   */
  const updateDisplay = () => {
    document.getElementById("display").value = currentInput;
  };

  /**
   * Clears the display by resetting the current input, operator, previous input, and updating the display.
   */
  const clearDisplay = () => {
    setCurrentInput("");
    setOperator("");
    setPreviousInput("");
    updateDisplay();
  };

  /**
   * Appends a number to the current input and updates the display.
   * @param {number} number - The number to append.
   */

  const appendNumber = (number) => {
    setCurrentInput(currentInput + number);
    updateDisplay();
  };

  /**
   * Appends a decimal point to the current input if it doesn't already contain one.
   * Updates the display after appending the decimal point.
   */
  const appendDecimal = () => {
    if (!currentInput.includes(".")) {
      setCurrentInput(currentInput + ".");
      updateDisplay();
    }
  };

  /**
   * Sets the operator and updates the input values.
   * @param {string} op - The operator to be set.
   */
  const setOperatorHandler = (op) => {
    if (currentInput !== "") {
      setOperator(op);
      setPreviousInput(currentInput);
      setCurrentInput("");
      updateDisplay();
    }
  };

  /**
   * Calculates the result based on the current operator and inputs.
   * If the operator and current input are valid, performs the calculation and updates the display.
   * If the operator is division and the current input is zero, displays an alert and clears the display.
   */
  const calculate = () => {
    if (operator !== "" && currentInput !== "") {
      let result;
      const num1 = parseFloat(previousInput);
      const num2 = parseFloat(currentInput);

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            alert("Cannot divide by zero!");
            clearDisplay();
            return;
          }
          break;
        default:
          return;
      }

      setCurrentInput(result.toString());
      setOperator("");
      setPreviousInput("");
      updateDisplay();
    }
  };

  // Button labels and corresponding click handlers
  /**
   * Array of button data objects representing the buttons on the calculator.
   * @type {ButtonData[]}
   */
  /**
   * Array of button data objects.
   * Each object represents a button on the calculator.
   * @typedef {Object} ButtonData
   * @property {string} label - The label displayed on the button.
   * @property {Function} onClick - The function to be executed when the button is clicked.
   */
  const buttonsData = [
    { label: "C", onClick: clearDisplay },
    { label: "7", onClick: () => appendNumber("7") },
    { label: "8", onClick: () => appendNumber("8") },
    { label: "9", onClick: () => appendNumber("9") },
    { label: "/", onClick: () => setOperatorHandler("/") },
    { label: "4", onClick: () => appendNumber("4") },
    { label: "5", onClick: () => appendNumber("5") },
    { label: "6", onClick: () => appendNumber("6") },
    { label: "*", onClick: () => setOperatorHandler("*") },
    { label: "1", onClick: () => appendNumber("1") },
    { label: "2", onClick: () => appendNumber("2") },
    { label: "3", onClick: () => appendNumber("3") },
    { label: "-", onClick: () => setOperatorHandler("-") },
    { label: "0", onClick: () => appendNumber("0") },
    { label: ".", onClick: appendDecimal },
    { label: "=", onClick: calculate },
    { label: "+", onClick: () => setOperatorHandler("+") },
    { label: "-1", onClick: () => appendNumber("-1") },
  ];

  useEffect(() => {
    updateDisplay();
  }, [updateDisplay]);

  return (
    <div className="calculator">
      <input type="text" id="display" readOnly />
      <div className="buttons">
        {buttonsData.map((button, index) => (
          <Button key={index} label={button.label} onClick={button.onClick} />
        ))}
      </div>
    </div>
  );
};

export default CalculatorComponent;
