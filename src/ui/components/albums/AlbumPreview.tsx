import { Album } from "../../../types/album";

type Props = {
  album: Album;
};

const size = 180;

export const AlbumPreview = (props: Props) => {
  const { album } = props;
  const { name, release_date, artists, images } = album;

  const pp = images[0];

  const artistsFormatted = artists.map((artist) => artist.name).join(", ");

  return (
    <div
      style={{ alignItems: "start" }}
      className="flex gap-y-2 grid col-span-auto items-center gap-x-none color-white font-bold p-1 m-1"
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
          borderRadius: 8,
        }}
        alt="Album"
      />
      <div className="flex self-start flex-col w-full max-w-[180px]">
        <p className="block font-normal text-black text-sm md:text-lg mb-0 mt-0 truncate">
          {name}
        </p>
        <p className="block text-outerSpace text-xs md:text-md font-medium">
          {`${new Date(release_date).getFullYear()} • ${artistsFormatted}`}
        </p>
      </div>
    </div>
  );
};
