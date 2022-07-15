import "./App.css";
import { Provider } from "react-redux";
import AppRoot from "./AppRoot";
import { store } from "./redux/store";

const App = () => (
  <Provider store={store}>
    <AppRoot />
  </Provider>
);

export default App;
