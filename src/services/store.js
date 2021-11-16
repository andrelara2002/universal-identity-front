import { createStore } from "redux";

const initialState = {
  app: {
    name: "",
    cpf: "",
    email: "",
    rank: 0,
    history: []
  }
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        app: {
          ...state.app,
          name: action.payload
        }
      };
    case "SET_EMAIL":
      return {
        ...state,
        app: {
          ...state.app,
          email: action.payload
        }
      };
    case "SET_RANK":
      return {
        ...state,
        app: {
          ...state.app,
          rank: action.payload
        }
      };
    case "SET_HISTORY":
      return {
        ...state,
        app: {
          ...state.app,
          history: action.payload
        }
      };
    case "PUSH_HISTORY":
      return {
        ...state,
        app: {
          ...state.app,
          history: [...state.app.history, action.payload]
        }
      };
    default:
      return state;
  }
};

export default createStore(reducer);