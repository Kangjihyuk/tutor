import { legacy_createStore } from "redux";

const cardReducer = (
  state = {
    card: [{ id: 1, qty: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      return {
        ...state,
        card: [...state.card, action.payload],
      };
    default:
      return state;
  }
};

const store = legacy_createStore(cardReducer);
console.log("oncreate store :", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE :", store.getState());
});

const action1 = { type: "ADD_TO_CARD", payload: { id: 2, qty: 5 } };
store.dispatch(action1);
const action2 = { type: "ADD_TO_CARD", payload: { id: 10, qty: 5 } };
store.dispatch(action2);
