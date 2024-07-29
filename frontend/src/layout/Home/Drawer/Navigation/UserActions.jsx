import React from "react";

function UserActions() {
  return (
    <div className="flex flex-wrap gap-4 content-center p-4 mt-48 rounded-lg backdrop-blur-[10px] bg-white bg-opacity-80">
      <div className="flex flex-col justify-center items-start pr-2 my-auto rounded-lg">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc76fa0aea1a079cb8df7de48d32afe87fae6eb7fcd230bf11f62c22d05b74c0?apiKey=f7c445a693754f41b608316d680ac812&&apiKey=f7c445a693754f41b608316d680ac812"
          className="w-6 aspect-square rounded-[80px]"
          alt="User avatar"
        />
      </div>
      <button className="flex justify-center items-center p-1 rounded-lg">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/565bd84cf8a8d24afa3d5b36891ec6d2b2bd549dd48988aefbc48e714359913f?apiKey=f7c445a693754f41b608316d680ac812&&apiKey=f7c445a693754f41b608316d680ac812"
          className="w-6 aspect-square"
          alt="Action 1"
        />
      </button>
      <button className="flex justify-center items-center p-1 rounded-lg">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/99e1046dedde49efc8f613d9b29897609ebbc49464930c35d05636d1f4d6ca77?apiKey=f7c445a693754f41b608316d680ac812&&apiKey=f7c445a693754f41b608316d680ac812"
          className="w-6 aspect-square"
          alt="Action 2"
        />
      </button>
    </div>
  );
}

export default UserActions;
