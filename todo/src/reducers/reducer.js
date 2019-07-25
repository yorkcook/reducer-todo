export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_TODO = "CLEAR_TODO";

export const intialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 1
    },
    {
      item: "Become a React master",
      completed: false,
      id: 2
    },
    {
      item: "Travel the world",
      completed: false,
      id: 3
    },
    {
      item: "Have fun during this crazy thing called life",
      completed: false,
      id: 4
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
