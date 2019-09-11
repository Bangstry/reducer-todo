import React, { useState } from "react";
import {Button, Input, Icon, Form} from 'semantic-ui-react';

const FormTodo = props => {
  const [addItem, setAddItem] = useState("");

  const handleListAdd = e => {
    e.preventDefault();
    if (addItem != "") {
      props.dispatch({ type: "add", payload: addItem });
      setAddItem("");
    }
  };
  const handleReset = e => {
    e.preventDefault();
    props.dispatch({ type: "clear" });
  };

  return (
    <div>
      <Form>

        <Input
          value={addItem}
          onChange={e => setAddItem(e.target.value)}
        />
        <Button onClick={e => handleListAdd(e)}><Icon name='add' />Add </Button>
        <Button icon onClick={e => {handleReset(e)}}>
        <Icon name='delete' />Reset
      </Button>
      </Form>
      
    </div>
  );
};

export default FormTodo;