import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import { Songs } from "../context";

function Playing() {
  const { song, handleSetSong } = useContext(Songs);
  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleClickPrevious = () => {
    handleSetSong(song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="playing-music"
        style={{ background: "#0F172A", height: "6rem" }}
        src={song.url}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  );
}

export default Playing;
