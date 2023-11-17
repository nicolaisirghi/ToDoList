import { Button } from '../../../components/Button';
import { FC } from 'react';

interface Props {
  onClick?: VoidFunction;
}

export const SaveButton: FC<Props> = ({ onClick }) => {
  return <Button className='btn-save' width='60px' height='42px' backgroundColor='#6ECCAF'
                 onClick={onClick}>Save</Button>;
};