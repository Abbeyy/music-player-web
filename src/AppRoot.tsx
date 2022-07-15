import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import NavigationMenu from "./ui/components/navigation/NavigationMenu";
import Welcome from "./ui/components/welcome/Welcome";

const AppRoot = () => (
  <Router>
    <div>
      <NavigationMenu />

      <hr />
      <Switch>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Switch>
    </div>
  </Router>
);

export default AppRoot;
