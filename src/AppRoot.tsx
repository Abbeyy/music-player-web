// import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import styles from "./AppRoot.module.css";
import Welcome from "./ui/components/welcome/Welcome";
import Me from "./ui/components/me/Me";
import { ArtistProfile } from "./ui/components/artists/profile/ArtistProfile";
import { Login } from "./ui/components/authentication/LoginNew";
import { BaseLayout } from "./ui/layouts/baseLayout";

const AppRoot = () => {
  return (
    <Router>
      <div className={styles["AppRoot"]}>
        <Switch>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<BaseLayout />}>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/me" element={<Me />} />
            <Route path="/artist" element={<ArtistProfile />} />
          </Route>

          <Route path="*" element={<Login />} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoot;
