import React, { createContext, useReducer, useContext } from "react";
import { GET_POSTS, UPDATE_POSTS, ADD_POST, REMOVE_POST, SET_CURRENT_POST, LOADING } from "./actions";
// Don't forget to import all of your actions!

const BlogContext = createContext();
const { Provider } = BlogContext;

const reducer = (state, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, { GET_POSTS, UPDATE_POSTS, ADD_POST, REMOVE_POST, SET_CURRENT_POST, LOADING });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(BlogContext);
};

export { StoreProvider, useStoreContext };
