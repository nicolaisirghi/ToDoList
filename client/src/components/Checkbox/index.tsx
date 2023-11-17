import React, { ChangeEvent, FC, PropsWithChildren, useMemo, useState } from 'react';

interface Props {
  id?: string;
  onChange?: (v: ChangeEvent<HTMLInputElement>) => void;
  isCompleted?: boolean;
}

export const Checkbox: FC<PropsWithChildren<Props>> = ({ id, isCompleted, onChange, children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isCompleted) return;

    setIsChecked(!isChecked);
    onChange && onChange?.(e);
  };

  const _isChecked = useMemo(() => isCompleted || isChecked, [isCompleted, isChecked]);
  return (
    <>
      <input
        type="checkbox"
        id={id}
        disabled={isCompleted}
        checked={_isChecked}
        className="tdl-input-checkbox"
        onChange={handleChange}
      />
      {children}
    </>
  );
};
