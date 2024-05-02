import { useEffect } from "react";
import { setupForLoggingIn } from "../../../thunk/setupForLoggingIn";
import { takeUserToExternalAuthentication } from "../../../thunk/logUserIn";
import { useAppDispatch } from "../../../hooks";

type Props = {};

export const Login = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setupForLoggingIn());
  }, []);

  const handleLogin = () => dispatch(takeUserToExternalAuthentication());

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gray-100 drop-shadow-xl">
      <div className="flex min-w-[320px] p-[4rem] w-[50%] h-[45%] md:h-[50%] items-center justify-between flex-col rounded-[8px] bg-white">
        <div className="flex flex-col items-center justify-center gap-y-[1rem] md:gap-y-[2rem]">
          <h1 className="flex text-[#3E173D] text-3xl md:text-[3.5rem] font-bold">
            EchoScape
          </h1>
          <p className="flex px-4 text-center text-[#9E829C] text-md md:text-xl font-medium">
            Your chic new online music player
          </p>
        </div>

        <button
          className="flex px-3 py-2 hover:bg-[#4E2C4D] md:px-4 md:py-3 items-center justify-center rounded-[4px] bg-[#3E173D] text-white text-sm md:text-md font-bold"
          onClick={handleLogin}
        >
          Login to Spotify
        </button>
      </div>
    </div>
  );
};
