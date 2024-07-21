import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCard = createAction("ADD_To_CARD");

const cardReducer = createReducer([], (builder) => {
  builder.addCase(addToCard, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    card: cardReducer,
  },
});

console.log("oncreate store :", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE :", store.getState());
});

store.dispatch(addToCard({ id: 2, qty: 4 }));
store.dispatch(addToCard({ id: 2, qty: 4 }));
store.dispatch(login);
