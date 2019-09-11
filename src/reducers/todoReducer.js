export const initialState = [];
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ];
      case "clear":
        let newState = state.filter(item => item.completed == false);
        return newState;
      case "clickitem":
        let clickedState = state.map(item => {
          if (item.id == action.payload) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        });
        return clickedState;
      default:
        return state;
    }
  
  };