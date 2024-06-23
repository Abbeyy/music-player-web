import { IoSettings } from "react-icons/io5";
import { useAppSelector } from "../../../hooks";
import { currentUserSelector } from "../../../redux/selectors/auth";
import TopArtists from "./top-items/TopArtists";
import TopTracks from "./top-items/TopTracks";

const size = 100;

const Me = () => {
  const user = useAppSelector(currentUserSelector);
  const pp = user?.images[0];

  return (
    <div className="flex flex-col w-full h-full gap-y-[1rem]">
      <div className="flex flex-row w-full justify-between items-center pr-4">
        <div className="flex px-4 flex-row justify-start items-center h-max">
          {!!pp?.url && (
            <img
              src={pp?.url}
              style={{
                imageRendering: "auto",
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
            <p className="text-black font-bold text-2xl">
              {user?.display_name}
            </p>
            {user?.followers && (
              <p className="text-black font-bold text-md">
                {user?.followers.total}
                <span className="font-normal">{` followers`}</span>
              </p>
            )}
            <p className="text-black font-medium text-sm">{user?.country}</p>
          </div>
        </div>

        <a
          href="https://support.spotify.com/us/category/account-help/"
          className="flex items-center justify-center gap-x-2 px-4 py-3 rounded-[8px] bg-feldgrau hover:bg-feldgrauHover"
        >
          <IoSettings color="white" size={24} />
          <p className="text-white font-bold">Settings</p>
        </a>
      </div>

      <div className="flex flex-col space-y-[2rem] w-full h-full md:overflow-y-scroll">
        <TopTracks />
        <TopArtists />
        {/* <CurrentUsersPlaylists /> */}
      </div>
    </div>
  );
};

export default Me;
