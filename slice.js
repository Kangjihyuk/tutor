import { configureStore, createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    addToCard(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
  },
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(cardSlice.actions.addToCard({ id: 2, qyt: 4 }));
store.dispatch(cardSlice.actions.addToCard({ id: 3, qyt: 2 }));
