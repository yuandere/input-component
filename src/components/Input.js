import React from "react";
import './Input.css';

const Input = ({ label, name, placeholder, demo, demolite, hover, focus, error, disabled, helperText, startIcon, endIcon, value, size, fullWidth, multiline }) => {
  let classes = '';
  if (error) {classes+='error'}
  if (focus) {classes+=' focus'}
  if (disabled) {classes+=' disabled'}
  
  let classesdemo = 'demo';
  if (demolite) {classesdemo+=' demolite'};
  
  let newid = '';
  if (focus) {newid = name+'-focus'}
  if (hover) {newid = name+'-hover'}

  if (!multiline) {
    return (
      <div className={classes+" input-container"}>
        {demo ? <p className={classesdemo}>{demo}</p> : null}
        <label htmlFor={name} className={classes}>
          {label ? label : "Label"}</label>
        <input type='text' 
        className={classes} 
        id={newid} 
        name={name} 
        disabled={disabled}
        placeholder={placeholder ? placeholder : "Placeholder"}></input>
        {helperText ? <p className={helperText && error ? "helperText-error" : "helperText"}>{helperText}</p> : null}
      </div>
    );
  }
  if (multiline) {
    return (
      <div className="input-container">
        <label htmlFor={name}>{label ? label : "Label"}</label>
        <textarea id={name} name={name} rows="5" cols="33" placeholder="Placeholder">
          
        </textarea>
      </div>
    );
  }
};

export default Input;
