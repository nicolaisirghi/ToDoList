import React from 'react';
import { Button } from '../../../components/Button';
import { FC } from 'react';

interface Props {
  onRemove?: VoidFunction;
  title?: string;
}

export const RemoveButton: FC<Props> = ({ onRemove, title = 'Remove' }) => {
  return (
    <Button className="btn-remove" width="fit-content" height="42px" onClick={onRemove}>
      {title}
    </Button>
  );
};
