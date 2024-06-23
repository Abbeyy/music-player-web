import { takeUserToExternalAuthentication } from "../../../thunk/logUserIn";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { motion } from "framer-motion";
import { Navigate, useLocation } from "react-router-dom";
import { isLoggedInSelector } from "../../../redux/selectors/auth";

export const Login = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  const handleLogin = () => dispatch(takeUserToExternalAuthentication());

  //already logged in
  if (location.pathname === "/login" && isLoggedIn)
    return <Navigate to="/discover" />;

  const getSubline = () => {
    const words = ["Your", "chic", "new", "online", "music", "player"];
    return (
      <>
        {words.map((currentWord, idx) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: idx / 10,
            }}
            key={idx}
          >
            {currentWord}
          </motion.span>
        ))}
      </>
    );
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gray-100 drop-shadow-2xl">
      <div className="flex min-w-[320px] p-[4rem] w-[50%] h-[45%] md:h-[50%] items-center justify-between flex-col rounded-[8px] bg-white">
        <div className="flex flex-col items-center justify-center gap-y-[0.75rem] md:gap-y-[1.5rem]">
          <h1 className="flex text-black text-[3rem] md:text-[3.5rem] font-extrabold">
            EchoScape
          </h1>
          <p className="flex px-4 gap-1 text-center text-black text-md md:text-xl font-medium">
            {getSubline()}
          </p>
          <p className="font-extrabold text-ashGrey">V 1.0.2</p>
        </div>

        <motion.button
          className="flex px-3 py-2 hover:bg-battleshipGreyHover md:px-4 md:py-3 items-center justify-center rounded-[4px] bg-battleshipGrey text-white text-sm md:text-md font-bold"
          onClick={handleLogin}
          whileTap={{ scale: 0.85 }}
        >
          Login to Spotify
        </motion.button>
      </div>
    </div>
  );
};
