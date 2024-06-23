// import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
  useParams,
  useLocation,
} from "react-router-dom";
import styles from "./AppRoot.module.css";
import Me from "./ui/components/me/Me";
import { ArtistProfile } from "./ui/components/artists/profile/ArtistProfile";
import { Login } from "./ui/components/authentication/LoginNew";
import { BaseLayout } from "./ui/layouts/baseLayout";
import Discover from "./ui/components/discover/Discover";
import { NotFound } from "./ui/components/error/notFound";
import { AnythingElse } from "./ui/layouts/anythingElse";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setupForLoggingIn } from "./thunk/setupForLoggingIn";
import { setToken } from "./redux/reducers/authSlice";
import { tokenSelector } from "./redux/selectors/auth";

const ExtractTokenAndRedirect = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const storedToken = useAppSelector(tokenSelector);
  const hasTokenInPath = location.hash.includes("access_token");

  if (hasTokenInPath || storedToken) {
    if (!storedToken)
      dispatch(setToken(location.hash.split("access_token=")[1]));
    return <Discover />;
  }

  return <Navigate to="/login" />;
};

const AppRoot = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setupForLoggingIn());
  }, []);

  return (
    <Router>
      <div className={styles["AppRoot"]}>
        <Switch>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<BaseLayout />}>
            <Route path="not-found" element={<NotFound />} />

            <Route path="discover" element={<ExtractTokenAndRedirect />} />
            {/* <Route path="discover" element={<Discover />} /> */}

            <Route path="me" element={<Me />} />
            <Route path="artist" element={<ArtistProfile />} />

            <Route path="*" element={<AnythingElse />} />
          </Route>

          <Route path="*" element={<AnythingElse />} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoot;
