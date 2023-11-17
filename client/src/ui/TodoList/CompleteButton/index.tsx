import React, { FC } from 'react';
import { Button } from '../../../components/Button';

interface Props {
  onClick?: VoidFunction;
}

export const CompleteButton: FC<Props> = ({ onClick }) => {
  return (
    <Button className="btn-complete" height="42px" backgroundColor="#6ECCAF" onClick={onClick}>
      Set as Done
    </Button>
  );
};
