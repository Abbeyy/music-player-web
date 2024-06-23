import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { getArtistById } from "../../../thunk/artists/getArtist";
import { Artist } from "../../../types/artist";

import { useLayoutEffect, useState } from "react";

type Props = {
  artist: Artist;
};

const mdSize = 180;
const smSize = 100;
export const ArtistPreview = (props: Props) => {
  const { artist } = props;
  const { id, name, popularity, genres, followers, images } = artist;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [size, setSize] = useState(window.innerWidth >= 748 ? mdSize : smSize);

  useLayoutEffect(() => {
    const onResize = () => setSize(window.innerWidth >= 748 ? mdSize : smSize);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pp = images[0];

  const genresFormatted = genres.join(", ");

  const getArtist = () => {
    dispatch(getArtistById(id, navigate));
  };

  return (
    <button
      onClick={getArtist}
      style={{
        alignItems: "start",
      }}
      className="flex flex-col gap-y-1 md:grid md:col-span-auto items-center gap-x-2 md:gap-x-none color-white font-bold p-1 m-1 md:p-4 md:m-4 md:gap-y-2"
    >
      <img
        src={pp.url}
        style={{
          width: size,
          height: size,
          maxHeight: size,
          maxWidth: size,
          objectFit: "cover",
          objectPosition: "100% 0%",
          aspectRatio: "auto",
          borderRadius: 16,
        }}
        alt="Artist"
      />

      <div className="flex flex-col self-start max-w-[100vw]">
        <p className="block text-start font-normal text-black text-sm md:text-lg mb-0 mt-0 truncate max-w-[100px] md:max-w-[180px]">
          {name}
        </p>
        <p className="block text-gray-400 font-normal flex-1 self-start text-xs md:text-md truncate gap-y-1 max-w-[100px] md:max-w-[180px]">
          {genresFormatted}
        </p>
      </div>
    </button>
  );
};
