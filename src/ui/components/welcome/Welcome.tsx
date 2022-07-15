import { useAppSelector } from "../../../hooks";
import { isLoggedInSelector } from "../../../redux/selectors/auth";
import LogIn from "../LogIn";
import LogOut from "../LogOut";

const Welcome = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  return (
    <div>
      {isLoggedIn ? <LogOut /> : <LogIn />}

      <h1>Welcome to Abbeys Player on Web.</h1>
    </div>
  );
};

export default Welcome;
