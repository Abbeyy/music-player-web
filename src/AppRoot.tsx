import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import NavigationMenu from "./ui/components/navigation/NavigationMenu";
import styles from "./AppRoot.module.css";
import Welcome from "./ui/components/welcome/Welcome";
import Me from "./ui/components/me/Me";

const AppRoot = () => (
  <Router>
    <div className={styles["AppRoot"]}>
      <NavigationMenu />

      <Switch>
        <Route path="/" element={<Welcome />} />
        <Route path="/me" element={<Me />} />
      </Switch>
    </div>
  </Router>
);

export default AppRoot;
