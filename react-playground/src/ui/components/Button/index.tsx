import React from 'react';
import classNames from 'classnames';
import './styles';

// Accessibility Warning: Be careful when marking up links with the button role. Buttons are expected to be triggered using the Space key, while links are expected to be triggered through the Enter key. In other words, when links are used to behave like buttons, adding role="button" alone is not sufficient. It will also be necessary to add a key event handler that listens for the Space key in order to be consistent with native buttons.

function handleBtnClick(event: any) {
  //toggleButton(event.target);
  console.log('Click Handled');
}

function handleBtnKeyDown(event: any) {
  // Check to see if space or enter were pressed
  if (event.key === ' ' || event.key === 'Spacebar') {
    // "Spacebar" for IE11 support
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    //toggleButton(event.target);
    console.log('Key Down Handled');
  }
}

// function handleBtnKeyDown(event: any) {
//   // Check to see if space or enter were pressed
//   if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
//     // "Spacebar" for IE11 support
//     // Prevent the default action to stop scrolling when space is pressed
//     event.preventDefault();
//     //toggleButton(event.target);
//     console.log("Key Down Handled");
//   }
// }

function toggleButton(element: any) {
  // Check to see if the button is pressed
  var pressed = element.getAttribute('aria-pressed') === 'true';
  // Change aria-pressed to the opposite state
  element.setAttribute('aria-pressed', !pressed);
}

export interface IProps {
  // Customized Properties
  id?: string;
  className?: string;
  btnStyle?: string; // Default, Filled, Link, Outline
  variant?: string; // primary, secondary, success, warning, danger
  selected?: boolean;
  as?: 'button' | 'input' | 'a' | 'div' | 'span'; // html element type
  // role?: for <a role="button">?

  // Native HTML Button Properties
  type?: 'button' | 'reset' | 'submit'; // Specifies the type of button
  name?: string; // Specifies a name for the button
  value?: string; // Specifies an initial value for the button
  disabled?: boolean; // 	Specifies that a button should be disabled

  // Native HTML A Link Properties
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;

  // ???
  title?: string;

  // ARIA-ROLES
  role?: 'button';
  tabIndex?: any;
  ariaPressed?: boolean | 'mixed' | undefined;
  ariaHaspopup?: 'menu' | true;
  ariaExpanded?: boolean | undefined;
  ariaLabel?: 'string';
  ariaLabelledby?: 'string';

  // HTML 5 Button Properties
  autoFocus?: boolean; // Specifies that a button should automatically get focus when the page loads
  form?: any; // Specifies one or more forms the button belongs to
  formaction?: string; // Specifies where to send the form-data when a form is submitted. Only for type="submit"
  formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'; // Specifies how form-data should be encoded before sending it to a server. Only for type="submit"
  formmethod?: 'get' | 'post'; // Specifies how to send the form-data (which HTTP method to use). Only for type="submit"
  formnovalidate?: boolean; // Specifies that the form-data should not be validated on submission. Only for type="submit"
  formtarget?: string; // Specifies where to display the response after submitting the form. Only for type="submit"
}

// const defaultProps = {};

const Button: React.FunctionComponent<IProps> = (props) => {
  const classes = classNames(props.className, props.btnStyle, props.variant);
  if (props.as === 'span') {
    return (
      <span
        id={props.id}
        className={classes}
        role={props.role}
        title={props.title}
        tabIndex={props.tabIndex}
        //onClick={handleBtnClick}
        onKeyDown={handleBtnKeyDown}
      >
        {props.children}
      </span>
    );
  } else if (props.as === 'div') {
    return (
      <div
        id={props.id}
        className={classes}
        role={props.role}
        title={props.title}
        tabIndex={props.tabIndex}
        //onClick={handleBtnClick}
        onKeyDown={handleBtnKeyDown}
      >
        {props.children}
      </div>
    );
  } else if (props.as === 'a' || props.href) {
    return (
      <a
        id={props.id}
        className={classes}
        href={props.href}
        target={props.target}
        role={props.role}
        title={props.title}
        tabIndex={props.tabIndex}
        //onClick={handleBtnClick}
        onKeyDown={handleBtnKeyDown}
      >
        {props.children}
      </a>
    );
  } else if (props.as === 'input') {
    return (
      <input
        id={props.id}
        className={classes}
        role={props.role}
        title={props.title}
        type={props.type}
        value={props.value}
        disabled={props.disabled}
      />
    );
  } else {
    return (
      <button
        id={props.id}
        className={classes}
        title={props.title}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
