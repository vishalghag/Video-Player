import React, { useEffect, useState } from "react";
import { videoList } from "../constant/data";
import ReactPlayer from "react-player";
import logo from "../images/logo.jpeg";

const PlayList = ({ currentMovie, setCurrentMovie, searchMovie }) => {
  useEffect(() => {
    console.log(currentMovie, "lhgjgfh");
  }, [currentMovie]);

  const handleVideoClick = (id) => {
    // eslint-disable-next-line array-callback-return
    videoList.shortMovies.filter((ele) => {
      if (ele.id === id) {
        return setCurrentMovie(ele);
      }
    });
  };

  return (
    <>
      <div className="flex flex-row items-center justify-evenly">
        <div id="middleBox" className=" mb-[500px]">
          {currentMovie && (
            <>
              {/* {currentMovie.map((movie) => (
              
            ))} */}
              <div id="one">
                <ReactPlayer
                  key={currentMovie[0].id}
                  url={currentMovie[0].url}
                  controls
                  playing={false}
                />
                <span className=" text-white font-medium">
                  {currentMovie[0].name}
                </span>
              </div>
            </>
          )}
          {!currentMovie && (
            <>
              <div id="two">
                <ReactPlayer
                  url={videoList.shortMovies[0].url}
                  controls
                  playing={false}
                />
                <span className=" text-white font-medium">
                  {videoList.shortMovies[0].name}
                </span>
              </div>
            </>
          )}
        </div>
        <div id="thumb" className="flex flex-col justify-end items-end mt-0">
          {videoList.shortMovies.map((movie) => (
            <div
              className="m-6 mt-6 rounded-lg cursor-pointer"
              key={movie.id}
              onClick={() => handleVideoClick(movie.id)}
            >
              <img
                className="w-[130px] h-[130px] rounded-[8px]"
                src={movie.thumb}
                alt="thumb"
              />
              <span className=" text-white font-semibold m-0">
                {movie.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayList;
