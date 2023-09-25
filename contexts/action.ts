import { StoreType } from "./store";

const action = (
  state: StoreType,
  action: { type: string; value: any }
): StoreType => {
  switch (action.type) {
    case "SET_POST":
      return { ...state, posts: action.value };
    case "SET_LOADING":
      return { ...state, isLoading: action.value };
    default:
      return state;
  }
};

export default action;
