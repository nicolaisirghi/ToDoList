import React, { ChangeEvent, forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, useState } from 'react';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string;
  placeholder?: string;
  onChange?: (v: string) => void;
}

const _Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { value: _value, onChange, placeholder, ...props },
  ref
) => {
  const [value, setValue] = useState(_value ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    onChange && onChange(v);
  };

  return (
    <input className="tdl-input" value={value} onChange={handleChange} placeholder={placeholder} {...props} ref={ref} />
  );
};

export const Input = forwardRef<HTMLInputElement, Props>(_Input);
