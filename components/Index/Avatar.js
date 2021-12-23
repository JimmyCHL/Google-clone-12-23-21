import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <img
      className={`h-10 rounded-full cursor-pointer p-[0.2px] border-double border-2 border-gray-600 transition duration-150 hover:scale-110 ${
        className ? className : ""
      }`}
      loading="lazy"
      src={url}
      alt="profile"
    ></img>
  );
};

export default Avatar;
