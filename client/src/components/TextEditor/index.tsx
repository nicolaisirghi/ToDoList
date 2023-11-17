import React, { FC, useRef, useState } from 'react';
import { Input } from '../Input';
import { SaveButton } from '../../ui/TodoList/SaveButton';
import classNames from 'classnames';

interface Props {
  value: string;
  isCompleted?: boolean;
  onChange?: (v: string) => void;
}

export const TextEditor: FC<Props> = ({ value, onChange, isCompleted }) => {
  const [isEditable, setEditable] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const className = classNames('tdl-view', {
    'tdl-view--completed': isCompleted,
  });

  const handleClick = () => {
    setEditable(true);
  };

  const onSave = () => {
    const value = inputRef.current?.value ?? '';
    onChange && onChange(value);
    setEditable(false);
  };

  return isEditable && !isCompleted ? (
    <>
      <Input autoFocus={true} ref={inputRef} className="tdl-input-edit" value={value} />
      <SaveButton onClick={onSave} />
    </>
  ) : (
    <div className={className} onClick={handleClick}>
      {value}
    </div>
  );
};
