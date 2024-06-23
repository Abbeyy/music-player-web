import ReactPlayer from "react-player";
import { Track } from "../../../types/track";
import { useLayoutEffect, useState } from "react";

type Props = {
  track: Track;
};

const mdSize = 180;
const smSize = 50;

const TrackPreview = (props: Props) => {
  const { track } = props;

  const {
    name,
    explicit,
    artists,
    popularity,
    preview_url,
    album,
    is_playable,
  } = track;

  const [size, setSize] = useState(window.innerWidth >= 748 ? mdSize : smSize);

  useLayoutEffect(() => {
    const onResize = () => setSize(window.innerWidth >= 748 ? mdSize : smSize);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pp = album.images[0];

  const artistsFormatted = artists.map((artist) => artist.name).join(", ");

  return (
    <div
      style={{ alignItems: "start" }}
      className="flex flex-row gap-y-2 md:grid md:col-span-auto items-center gap-x-2 md:gap-x-none color-white font-bold p-1 m-1"
    >
      {pp.url && is_playable ? (
        <ReactPlayer
          light={pp.url || true}
          playing={false}
          muted={false}
          url={preview_url}
          width={size}
          height={size}
        />
      ) : (
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
            borderRadius: 8,
          }}
          alt="Album"
        />
      )}
      <div className="flex self-start flex-col w-full max-w-[180px]">
        <p className="block font-normal text-black text-sm md:text-lg mb-0 mt-0 truncate">
          {name}
        </p>
        <div className="flex flex-row w-full p-[0.1rem] justify-start md:justify-between">
          {explicit && (
            <p className="block text-feldgrauAccent flex-1 self-start text-xs md:text-md">{`E`}</p>
          )}
          <p
            className={`block text-outerSpace text-xs md:text-md font-medium ${
              explicit ? "self-start flex-0" : ""
            }`}
          >
            {popularity + ` ♥`}
          </p>
        </div>

        {/* <p className="text-md font-medium m-[0.1rem] flex-wrap text-black truncate">
          Featuring {artistsFormatted}
        </p>
        <p className="text-lg font-bold m-[0.1rem] flex-wrap text-black truncate">
          {popularity} ♥
        </p> */}
      </div>
    </div>
  );
};

export default TrackPreview;
