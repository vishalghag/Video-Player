import React, { useEffect, useState } from "react";
import { videoList } from "../constant/data";
import ReactPlayer from "react-player";
import logo from "../images/logo.jpeg";

const PlayList = () => {
  useEffect(() => {}, []);

  // const handleVideoClick = (id) => {
  //   videoList.shortMovies.filter((ele) => {
  //     if (ele.id === id) {
  //       console.log(currentMovie, "cureen");
  //       return setCurrentMobvie(ele);
  //     }
  //   });
  // };

  return (
    <>
      {/* <div className="flex flex-row items-center justify-evenly">
        <div id="middleBox" className=" gap-52">
          {currentMovie && (
            <ReactPlayer
              key={currentMovie.id}
              width={"400px"}
              height={"200px"}
              url={currentMovie.url}
              controls
              playing={false}
            />
          )}
          {!currentMovie && (
            <ReactPlayer
              width={"400px"}
              height={"200px"}
              url={videoList.shortMovies[0].url}
              controls
              playing={false}
            />
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
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default PlayList;
