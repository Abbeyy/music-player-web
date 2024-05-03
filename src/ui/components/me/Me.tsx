import { useAppSelector } from "../../../hooks";
import { currentUserSelector } from "../../../redux/selectors/auth";
import TopArtists from "./top-items/TopArtists";
import TopTracks from "./top-items/TopTracks";

const size = 140;

const Me = () => {
  const user = useAppSelector(currentUserSelector);
  const pp = user?.images[0];

  return (
    <div className="flex flex-col w-full h-full gap-y-[1rem]">
      <div className="flex px-4 flex-row justify-start items-center space-x-4 h-max">
        {!!pp?.url && (
          <img
            src={pp?.url}
            style={{
              width: size,
              height: size,
              objectFit: "cover",
              objectPosition: "100% 0%",
              aspectRatio: "auto",
              borderRadius: 150,
              margin: 30,
              marginLeft: 0,
            }}
            alt="Artist"
          />
        )}

        <div className="flex flex-col">
          <p className="text-white font-bold text-2xl">{user?.display_name}</p>
          {user?.followers && (
            <p className="text-[#F0EFF4] font-bold text-md">{`${user?.followers.total} Followers`}</p>
          )}
          <p className="text-[#F0EFF4] font-medium text-sm">{user?.country}</p>
        </div>
      </div>

      <div className="flex flex-col space-y-[2rem] w-full h-full overflow-scroll">
        <TopTracks />
        <TopArtists />
        {/* <CurrentUsersPlaylists /> */}
      </div>
    </div>
  );
};

export default Me;
