import { ChangeEvent, FC, useCallback, useState } from 'react';
import { ListItem } from '../../ui/TodoList/ListItem';

interface Props {
  items: {
    id: string;
    value: string;
    isCompleted?: boolean;
  }[];
  onRemove?: (id: string) => void;
  onChange?: (id: string, value: string) => void;
  onSelected?: (e: ChangeEvent<HTMLInputElement>) => void;
}


export const List: FC<Props> = ({ items, onChange, onRemove, onSelected }) => {

  return (
    <ul>
      {items.map(({ value, id, isCompleted }) => (
        <ListItem
          key={id}
          isCompleted={isCompleted}
          onCheckboxChange={onSelected}
          onRemove={() => onRemove?.(id)}
          id={id}
          value={value}
          onChange={(v) => onChange?.(id, v)}
        />
      ))}
    </ul>
  );
};
