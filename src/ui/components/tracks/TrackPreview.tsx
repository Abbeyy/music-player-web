import ReactPlayer from "react-player";
import { Track } from "../../../types/track";

type Props = {
  track: Track;
};

const size = 180;

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

  const pp = album.images[0];

  const artistsFormatted = artists.map((artist) => artist.name).join(", ");

  return (
    <div className="flex flex-col color-white font-bold p-4 m-4 rounded-[8px] w-[14rem] gap-y-4">
      {pp.url && is_playable ? (
        <ReactPlayer
          light={pp.url || true}
          playing={false}
          muted={false}
          url={preview_url}
          width={180}
          height={180}
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
            borderRadius: 16,
          }}
          alt="Album"
        />
      )}
      <div className="flex flex-col">
        <div className="flex items-center justify-start">
          <p className="block uppercase text-white text-xl mb-0 mt-0 truncate">
            {name}
          </p>
        </div>
        <div className="flex flex-row w-full p-[0.1rem] justify-between">
          {explicit && (
            <p className="flex text-white flex-1 self-start text-lg">{`E`}</p>
          )}
          <p
            className={`flex text-white text-lg font-medium ${
              explicit ? "self-start flex-0" : "justify-end flex-1"
            }`}
          >
            {popularity + ` ♥`}
          </p>
        </div>

        {/* <p className="text-md font-medium m-[0.1rem] flex-wrap text-white truncate">
          Featuring {artistsFormatted}
        </p>
        <p className="text-lg font-bold m-[0.1rem] flex-wrap text-white truncate">
          {popularity} ♥
        </p> */}
      </div>
    </div>
  );
};

export default TrackPreview;
