import { useAppSelector } from "../../../hooks";
import { TOPIC } from "../../../types";
import { currentUserNameSelector } from "../../../redux/selectors/auth";
import { motion } from "framer-motion";

const gradients = [
  "linear-gradient(300deg, #586F6B, #A7A794)",
  "linear-gradient(193deg, #5B7B76, #A7A794)",
  "linear-gradient(350deg, #586F6B, #7F9183)",
  "linear-gradient(25deg, #BBBB9C, #8CA591)",
];

const Discover = () => {
  const name = useAppSelector(currentUserNameSelector);

  const getCards = () =>
    [TOPIC.ALBUMS, TOPIC.ARTISTS, TOPIC.TRACKS, TOPIC.PLAYLISTS].map(
      (topic, idx) => (
        <motion.button
          className="flex w-[150px] h-[100px] xs:w-[200px] xs:h-[140px] xs-sm:w-[300px] xs-sm:h-[180px] rounded-[8px] bg-pink-100 justify-start items-end"
          style={{
            background: gradients[idx],
          }}
          whileHover={{ scale: 1.15 }}
        >
          <h2 className="text-white font-bold text-lg xs:text-xl xs-sm:text-4xl p-4">
            {topic}
          </h2>
        </motion.button>
      )
    );

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full h-max self-start h-max flex-col justify-center items-center gap-y-[2rem]">
        <div className="flex flex-row flex-wrap justify-evenly gap-3 xs-sm:gap-7 h-full w-full">
          {getCards()}
        </div>
        <hr className="flex w-full h-[0.5px] drop-shadow-lg" />
        <h1 className="self-start text-black font-bold text-2xl">{`Discover new`}</h1>
      </div>
    </div>
  );
};

export default Discover;
