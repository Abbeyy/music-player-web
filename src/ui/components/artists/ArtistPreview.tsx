import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { getArtistById } from "../../../thunk/artists/getArtist";
import { Artist } from "../../../types/artist";

import styles from "./Artists.module.css";

type Props = {
  artist: Artist;
};

const size = 180;

export const ArtistPreview = (props: Props) => {
  const { artist } = props;
  const { id, name, popularity, genres, followers, images } = artist;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const pp = images[0];

  const genresFormatted = genres.join(", ");

  const getArtist = () => {
    dispatch(getArtistById(id, navigate));
  };

  return (
    <button
      onClick={getArtist}
      className="flex flex-col color-white font-bold p-4 m-4 rounded-[8px] w-[12rem] gap-y-4"
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
      <div className="flex flex-col justify-center items-start">
        <p className="block uppercase text-white text-xl mb-2 mt-0 truncate max-w-[11.5rem]">
          {name}
        </p>
        {/* <p className="block text-md font-medium m-[0.1rem] flex-wrap text-white truncate max-w-[11.5rem]">
          {`${popularity} popularity score`}
        </p>
        <p className="block text-lg font-bold m-[0.1rem] flex-wrap text-white truncate max-w-[11.5rem]">
          {`${followers.total} followers`}
        </p> */}
        <p className="block text-lg font-medium m-[0.1rem] flex-wrap text-white truncate max-w-[11.5rem]">
          {genresFormatted}
        </p>
      </div>
    </button>
  );
};
