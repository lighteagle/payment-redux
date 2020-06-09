import React from "react";
import { Provider } from "react-redux";

import Payment from "./components/Payment";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Payment />
    </Provider>
  );
}

export default App;
