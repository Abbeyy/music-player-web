// import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import styles from "./AppRoot.module.css";
import Me from "./ui/components/me/Me";
import { ArtistProfile } from "./ui/components/artists/profile/ArtistProfile";
import { Login } from "./ui/components/authentication/LoginNew";
import { BaseLayout } from "./ui/layouts/baseLayout";
import Discover from "./ui/components/discover/Discover";

const AppRoot = () => {
  return (
    <Router>
      <div className={styles["AppRoot"]}>
        <Switch>
          <Route path="/" element={<BaseLayout />}>
            <Route path="/discover" element={<Discover />} />
            <Route path="/me" element={<Me />} />
            <Route path="/artist" element={<ArtistProfile />} />

            <Route
              path="*"
              element={<Navigate to={{ pathname: "/discover" }} />}
            />
          </Route>

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<BaseLayout />} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoot;
