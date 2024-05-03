import { useAppSelector } from "../../../hooks";
import { TOPIC } from "../../../types";
import { currentUserNameSelector } from "../../../redux/selectors/auth";
import { motion } from "framer-motion";

const gradients = [
  "linear-gradient(300deg, #9c07b3, #1466b9)",
  "linear-gradient(193deg, #3d3372, #a81679)",
  "linear-gradient(350deg, #26195e, #b233ab)",
  "linear-gradient(25deg, #9c24b8, #2449d2)",
];

const Discover = () => {
  const name = useAppSelector(currentUserNameSelector);

  const getCards = () =>
    [TOPIC.ALBUMS, TOPIC.ARTISTS, TOPIC.TRACKS, TOPIC.PLAYLISTS].map(
      (topic, idx) => (
        <motion.button
          className="flex w-[300px] h-[180px] rounded-[8px] bg-pink-100 justify-start items-end"
          style={{
            background: gradients[idx],
          }}
          whileHover={{ scale: 1.15 }}
        >
          <h2 className="text-white font-bold text-4xl p-4">{topic}</h2>
        </motion.button>
      )
    );

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full h-max self-start h-max flex-col justify-center items-center gap-y-[3rem]">
        <h1 className="self-start text-white font-bold text-2xl">{`Welcome home, ${name}`}</h1>
        <div className="flex flex-row flex-wrap justify-evenly gap-x-7 gap-y-7 h-full w-full">
          {getCards()}
        </div>
      </div>
    </div>
  );
};

export default Discover;
