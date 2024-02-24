import React, { useEffect, useState } from "react";
import PlayList from "./PlayList";
import { videoList } from "../constant/data";
import folder from "../images/folder.png";

import Header from "../components/Header";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [currentMovie, setCurrentMovie] = useState("");
  const [searchMovie, setSearchMovie] = useState("");

  const [showMovie, setShowMovie] = useState(false);

  useEffect(() => {
    // If you have any initialization logic, you can place it here
  }, []);

  const searchFilterContentFn = (e) => {
    setSearchMovie(e.target.value);
    const filterSearch = videoList.shortMovies.filter((search) =>
      search.name.toLowerCase().includes(searchMovie.toLowerCase())
    );

    setCurrentMovie(filterSearch);
  };

  const showMiniMovie = () => {
    setShowMovie(false);
    if (searchMovie.length === 0 || null) setShowMovie(true);
  };

  return (
    <>
      <Header
        searchFilterContentFn={searchFilterContentFn}
        showMiniMovie={showMiniMovie}
      />

      <div className="flex flex-col items-center justify-center w-full h-full">
        {currentMovie.length > 0 && searchMovie.length >= 2
          ? currentMovie.map((movie) => (
              <div
                key={movie.id}
                className="flex-col justify-center items-center"
              >
                <div>
                  <ReactPlayer
                    url={movie.url}
                    controls
                    width="400px"
                    height="400px"
                  />
                  <span>{movie.name}</span>
                </div>
              </div>
            ))
          : showMovie && (
              <div
                className="relative w-[300px] h-[300px] mt-20 "
                onClick={() => setShowMovie(true)}
              >
                <img src={folder} alt="folder" />
                <span>Click on Folder to View Movie PlayList</span>
              </div>
            )}
      </div>
    </>
  );
};

export default VideoPlayer;
