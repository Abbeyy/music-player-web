import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import { isLoggedInSelector } from "../../../redux/selectors/auth";
import { motion } from "framer-motion";

export const NotFound = () => {
  const location = useLocation();
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  const navigate = useNavigate();

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gray-100 drop-shadow-xl">
      <div className="flex min-w-[280px] md:min-w-[320px] gap-[2rem] p-[3rem] md:p-[4rem] mt-[70px] h-[55%] md:h-[65%] w-[50%] items-center justify-between flex-col rounded-[8px] bg-white">
        <div className="flex flex-col items-center justify-center gap-y-[0.75rem] md:gap-y-[1.5rem]">
          <div className="flex flex-col items-center">
            <h1 className="text-[#3E173D] text-[1rem] sm:text-[1.75rem] xl:text-[3rem] font-bold">
              Are you lost?
            </h1>
            <p className="text-[#3E173D] text-[1.5rem] sm:text-[2.5rem] xl:text-[3.5rem] font-bold">
              SOS! 404!
            </p>
          </div>
          <p className="flex px-4 gap-1 text-center text-[#9E829C] text-sm md:text-lg font-medium">
            We think you might be in the wrong place, that's why you're seeing
            this page. Let's get you back on track.
          </p>
        </div>

        <motion.button
          className="flex px-3 py-2 hover:bg-[#4E2C4D] md:px-4 md:py-3 items-center justify-center rounded-[4px] bg-[#3E173D] text-black text-sm md:text-md font-bold"
          onClick={() =>
            navigate(
              !isLoggedIn && !location?.hash.includes("access_token")
                ? "/login"
                : "/discover"
            )
          }
          whileTap={{ scale: 0.85 }}
        >
          {!isLoggedIn && !location?.hash.includes("access_token")
            ? "Go to Login"
            : "Go Discover"}
        </motion.button>
      </div>
    </div>
  );
};
