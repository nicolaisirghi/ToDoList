import React, { ChangeEvent, FC } from 'react';
import { RemoveButton } from '../RemoveButton';
import { Row } from '../../../components/Row';
import { TextEditor } from '../../../components/TextEditor';
import { Checkbox } from '../../../components/Checkbox';
import classNames from 'classnames';

interface Props {
  id?: string;
  value: string;
  isCompleted?: boolean;
  onChange?: (v: string) => void;
  onCheckboxChange?: (v: ChangeEvent<HTMLInputElement>) => void;
  onRemove?: VoidFunction;
}

export const ListItem: FC<Props> = ({ id, value, isCompleted, onChange, onCheckboxChange, onRemove }) => {
  const className = classNames('tdl-list', {
    'tdl-list--completed': isCompleted,
  });

  return (
    <li className={className}>
      <Row className="w-full" justifyContent="space-between">
        <Checkbox id={id} isCompleted={isCompleted} onChange={onCheckboxChange}>
          <TextEditor value={value} onChange={onChange} isCompleted={isCompleted} />
          <RemoveButton onRemove={onRemove} />
        </Checkbox>
      </Row>
    </li>
  );
};
