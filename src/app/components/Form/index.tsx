import * as React from 'react';
import * as classNames from 'classnames';
import './style';

// handlechange take input val, response id and update the response with api call

export interface InputProps {
  handleChange: (obj: { key: string; value: string }) => void;
  label: string;
  id: string;
  required?: boolean;
  className?: string;
  extraInputProps?: any;
}
export const Input = (props: InputProps) => {
  let inputClassname = classNames('input-container', props.className);
  let labelClassname = classNames(
    'input-label',
    props.required === true && 'required'
  );
  const handleInputChange = (key: string, value: any) => {
    const state: any = {};
    state[key] = value;
    props.handleChange(state);
  };
  return (
    <div className={inputClassname}>
      <label className={labelClassname}>{props.label}</label>
      <input
        onChange={e => handleInputChange(props.id, e.target.value)}
        {...props.extraInputProps}
      />
    </div>
  );
};

export default Input;
