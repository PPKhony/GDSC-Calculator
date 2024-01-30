/**
 * Button component.
 *
 * @param {Object} props - The props object.
 * @param {Function} props.onClick - The click event handler.
 * @param {string} props.label - The label text for the button.
 * @returns {JSX.Element} The rendered button element.
 */


const Button = (props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export default Button;
