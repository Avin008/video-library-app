import React from "react";
import { MdPlaylistAdd, MdThumbUp, MdWatchLater } from "react-icons/md";
import { useRemoveFromHistory } from "../hooks";
import { useAuthStore } from "../store";
import { Video } from "../types";

type HistoryVideoCardMenuProps = {
  videoData: Video;
};

const HistoryVideoCardMenu = ({
  videoData,
}: HistoryVideoCardMenuProps): React.ReactElement => {
  const token = useAuthStore((store: any) => store.token);

  const { mutate: removeFromHistory } = useRemoveFromHistory(videoData, token);

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    removeFromHistory();
  };

  return (
    <ul className="bg-background absolute bottom-1 right-2 z-10 h-fit w-fit space-y-1 border py-1 text-xs shadow-md transition-all dark:border-dark-border dark:bg-dark-background dark:text-gray-200">
      <li
        className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover"
        onClick={handleClick}
      >
        <MdPlaylistAdd className="text-xl" /> REMOVE FROM HISTORY
      </li>
    </ul>
  );
};

export default HistoryVideoCardMenu;
