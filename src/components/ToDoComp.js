import React from "react";
import {Segment} from 'semantic-ui-react';



const ToDoComp = ({dispatch, data}) => {

  const handleClickItem = e =>{
    e.preventDefault();
    dispatch({type: 'clickitem', payload: e.target.dataset.id})
}

  return (
    <Segment.Group raised>
      {data.map(item => {
        return <Segment className={item.completed ? "disabled" : null}  key={item.id}><h1 data-id={item.id}  onClick={(e)=>handleClickItem(e)}>{item.item}</h1></Segment>
      })}
    </Segment.Group>
  );
};

export default ToDoComp;