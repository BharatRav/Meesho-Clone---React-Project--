import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { StateProvider } from "./utils/StateProvider";
import reducer, {initialState} from "./utils/reducer";

ReactDOM.render(
    
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>,
    
    document.getElementById("root")
  );