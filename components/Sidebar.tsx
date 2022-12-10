import { useRouter } from "next/router";
import {
  MdFavorite,
  MdHistory,
  MdHome,
  MdOutlineFeaturedPlayList,
  MdWatchLater,
} from "react-icons/md";

const SideBar = (): React.ReactElement => {
  const router = useRouter();

  const navigate = (route: string) => {
    router.push(`/${route}`);
  };

  const activeLink = (route: string, routerTwo?: string) => {
    return (
      router.asPath === route ||
      (routerTwo && router.pathname.includes(routerTwo))
    );
  };

  return (
    <ul className="sticky top-16 flex flex-col space-y-3">
      <li
        className={`flex items-center gap-3 p-4 hover:cursor-pointer dark:text-dark-text dark:hover:bg-dark-hover ${
          activeLink("/") && "dark:bg-dark-hover"
        }`}
        onClick={() => navigate("/")}
      >
        <MdHome size={20} /> HOME
      </li>
      <li
        className={`flex items-center gap-3 p-4 hover:cursor-pointer dark:text-dark-text dark:hover:bg-dark-hover ${
          activeLink("/playlist", "/playlist/[PlaylistID]") &&
          "dark:bg-dark-hover"
        }`}
        onClick={() => navigate("playlist")}
      >
        <MdOutlineFeaturedPlayList size={20} /> PLAYLIST
      </li>
      <li
        className={`flex items-center gap-3 p-4 hover:cursor-pointer dark:text-dark-text dark:hover:bg-dark-hover ${
          activeLink("/liked") && "dark:bg-dark-hover"
        }`}
        onClick={() => navigate("liked")}
      >
        <MdFavorite size={20} /> LIKED
      </li>
      <li
        className={`flex items-center gap-3 p-4 hover:cursor-pointer dark:text-dark-text dark:hover:bg-dark-hover ${
          activeLink("/watch-later") && "dark:bg-dark-hover"
        }`}
        onClick={() => navigate("watch-later")}
      >
        <MdWatchLater size={20} /> WATCH LATER
      </li>
      <li
        className={`flex items-center gap-3 p-4 hover:cursor-pointer dark:text-dark-text dark:hover:bg-dark-hover ${
          activeLink("/history") && "dark:bg-dark-hover"
        }`}
        onClick={() => navigate("history")}
      >
        <MdHistory size={20} /> HISTORY
      </li>
    </ul>
  );
};

export default SideBar;
