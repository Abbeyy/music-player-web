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
import { useAppSelector } from "./hooks";
import { isLoggedInSelector } from "./redux/selectors/auth";
import { ArtistProfile } from "./ui/components/artists/profile/ArtistProfile";

const AppRoot = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  return (
    <Router>
      <div className={styles["AppRoot"]}>
        <NavigationMenu />

        <Switch>
          <Route path="/" element={<Welcome />} />
          <Route path="/me" element={isLoggedIn ? <Me /> : <Welcome />} />
          <Route path="/artist" element={<ArtistProfile />} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoot;
