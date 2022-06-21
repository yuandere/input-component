import React from "react";
import './Input.css';

//demo and demolite props are for display purposes only
const Input = ({ label, name, placeholder, value, demo, demolite, hover, focus, error, disabled, helperText, startIcon, endIcon, size, fullWidth, multiline, row, inputChange }) => {
  let classes = '';
  if (error) { classes += 'error' }
  if (focus) { classes += ' focus' }
  if (disabled) { classes += ' disabled' }
  if (size) { classes += `input-size-${size}` }

  let classesdemo = 'demo';
  if (demolite) { classesdemo += ' demolite' };

  let newid = '';
  if (focus) { newid = name + '-focus' }
  if (hover) { newid = name + '-hover' }

  let iconLeft, iconRight = '';
  if (startIcon) {
    iconLeft = <span className="material-icons">{startIcon}</span>;
    classes += ' start-icon'
  }
  if (endIcon) {
    iconRight = <span className="material-icons">{endIcon}</span>;
    classes += ' end-icon'
  }

  if (!multiline) {
    return (
      <div className={fullWidth ? "input-box fullWidth" : "input-box"}>
        {demo ? <p className={classesdemo}>{demo}</p> : null}
        <label htmlFor={name} className={classes}>
          {label ? label : "Label"}</label>
        <div className={classes + " input-container"}>
          {startIcon ? iconLeft : null}
          <input type='text'
            className={classes}
            id={newid}
            name={name}
            disabled={disabled}
            onChange={inputChange}
            defaultValue={value}
            placeholder=
              {placeholder ? placeholder : "Placeholder"}></input>
          {endIcon ? iconRight : null}
        </div>
        {helperText ? <p className={helperText && error ? "helperText-error" : "helperText"}>{helperText}</p> : null}
      </div>
    );
  }
  if (multiline) {
    return (
      <div className={fullWidth ? "input-box fullWidth" : "input-box"}>
        {demo ? <p className={classesdemo}>{demo}</p> : null}
        <label htmlFor={name} className={classes}></label>
        <textarea id={newid} 
        name={name} 
        rows={row} 
        cols="33" 
        placeholder=
          {placeholder ? placeholder : "Placeholder"}></textarea>
      </div>
    );
  }
};

export default Input;
