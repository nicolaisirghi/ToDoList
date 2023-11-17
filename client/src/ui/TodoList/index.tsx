import { ChangeEvent, FC, useCallback, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Row } from "../../components/Row";
import { List } from "../../components/List";
import { SaveButton } from "./SaveButton";
import { Todo, Todos } from '../../types';
import { connect } from "react-redux";
import {
  addTodoThunk,
  deleteTodoThunk,
  updateTodoThunk,
} from "../../redux/thunks/todo";
import { RemoveButton } from "./RemoveButton";
import { CompleteButton } from './CompleteButton';

interface Props {
  todos: Todos;
  addTodo: (v: string) => Promise<void>;
  removeTodo: (id: string) => void;
  updateTodo: (t:Todo) => void;
}

interface SelectedItem {
  id: string;
}

const TodoList: FC<Props> = ({ todos, addTodo, updateTodo, removeTodo }) => {
  const [currentValue, setCurrenValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

  const handleSelect = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { checked, id } = e.target;

      if (checked) {
        setSelectedItems([...selectedItems, { id }]);
      } else {
        setSelectedItems(selectedItems.filter((item) => item.id !== id));
      }
    },
    [selectedItems]
  );

  const handleClick = useCallback(() => {
    if (!currentValue) return;
    addTodo(currentValue);
  }, [addTodo, currentValue]);

  const handleChange = useCallback(
    (id: string, value: string) => {
      updateTodo({value, id});
    },
    [updateTodo]
  );

  const handleRemove = useCallback(
    (id: string) => {
      removeTodo(id);
    },
    [removeTodo]
  );

  const handleRemoveSelected = useCallback(() => {
    selectedItems.forEach((item) => {
      removeTodo(item.id);
      setSelectedItems((prevState) =>
        prevState.filter((i) => i.id !== item.id)
      );
    });
  }, [selectedItems, removeTodo]);


  const handleComplete = useCallback(() => {
    selectedItems.forEach((item) => {
      const todo = todos.find((todo) => todo.id === item.id);
      if (!todo) return;
      updateTodo({...todo, isCompleted: true});
      setSelectedItems((prevState) =>
        prevState.filter((i) => i.id !== item.id)
      );
    })
  },[selectedItems, todos, updateTodo])

  return (
    <Row className="tdl-wrapper" direction="column" justifyContent="start">
      <Header level={1}>My Todos</Header>
      <Row className="search-wrapper" justifyContent="start">
        <Input
          placeholder="Add something to do..."
          value={currentValue}
          onChange={setCurrenValue}
        />
        <SaveButton onClick={handleClick} />
      </Row>
      <Row className="w-full tdl-wrapper-list">
        <List
          items={todos}
          onRemove={handleRemove}
          onChange={handleChange}
          onSelected={handleSelect}
        />
      </Row>
      {selectedItems.length ? (
        <Row>
          <CompleteButton onClick={handleComplete}/>
          <RemoveButton
            title="Remove Selected"
            onRemove={handleRemoveSelected}
          />

        </Row>
      ) : null}
    </Row>
  );
};

export default connect(null, {
  addTodo: addTodoThunk,
  updateTodo: updateTodoThunk,
  removeTodo: deleteTodoThunk,
})(TodoList);
