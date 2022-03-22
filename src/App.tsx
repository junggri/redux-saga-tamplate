import React from 'react';
import {Provider} from "react-redux";
import configure from "./core/rootSaga";
import Index from "./page";

function App() {
  const store = configure()
  return (
    <Provider store={store}>
      <div className="App">
        <Index/>
      </div>
    </Provider>
  );
}

export default App;
