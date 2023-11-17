import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'start' | 'center' | 'end';
  direction?: 'row' | 'column';
  children: ReactNode;
  className?: string;
}

export const Row: FC<Props> = ({
  justifyContent = 'center',
  alignItems = 'center',
  direction = 'row',
  children,
  className,
}) => {
  const _className = classNames('tdl-row', className);
  return (
    <div style={{ display: 'flex', flexDirection: direction, alignItems, justifyContent }} className={_className}>
      {children}
    </div>
  );
};
