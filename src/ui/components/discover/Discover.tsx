import { useAppDispatch, useAppSelector } from "../../../hooks";
import { TOPIC } from "../../../types";
import { motion } from "framer-motion";
import { albumNewReleasesSelector } from "../../../redux/selectors/album";
import { AlbumPreview } from "../albums/AlbumPreview";
import { getAlbumNewReleases } from "../../../thunk/album/newReleases";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";

const gradients = [
  "linear-gradient(300deg, #586F6B, #A7A794)",
  "linear-gradient(193deg, #5B7B76, #A7A794)",
  "linear-gradient(350deg, #586F6B, #7F9183)",
  "linear-gradient(25deg, #BBBB9C, #8CA591)",
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1440, min: 1024 },
    items: 4,
  },
  md: {
    breakpoint: { max: 1024, min: 744 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 744, min: 0 },
    items: 2,
  },
};

const Discover = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAlbumNewReleases());
  }, []);

  const newAlbums = useAppSelector(albumNewReleasesSelector);

  const getCards = () =>
    [TOPIC.ALBUMS, TOPIC.ARTISTS, TOPIC.TRACKS, TOPIC.PLAYLISTS].map(
      (topic, idx) => (
        <motion.button
          className="flex min-w-[175px] h-[100px] xs:w-[200px] xs:h-[140px] xs-sm:w-[300px] xs-sm:h-[180px] rounded-[8px] bg-pink-100 justify-start items-end"
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
    <div className="flex flex-col w-full h-full pb-[3rem] scroll-y">
      <div className="flex w-full h-max self-start h-max flex-col justify-center items-center gap-y-[2rem]">
        <div className="flex flex-row flex-wrap xs:no-wrap justify-evenly gap-3 xs-sm:gap-5 h-full w-full">
          {getCards()}
        </div>
        <hr className="flex w-full h-[0.5px] drop-shadow-lg" />
        <h1 className="self-start text-black font-bold text-2xl">{`Discover new`}</h1>
        <div className="flex w-full h-min">
          <Carousel
            infinite
            swipeable
            draggable={false}
            customTransition="all .5"
            className="flex w-full h-full overflow-none"
            responsive={responsive}
          >
            {!!newAlbums?.items?.length &&
              newAlbums.items.map((album) => <AlbumPreview album={album} />)}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Discover;
