import React, { useRef } from "react";
import { MicrophoneIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Body = () => {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term.trim()) return;

    router.push(`/search?term=${term}`);
    searchInputRef.current.value = "";
  };
  return (
    <form className="flex-1 flex flex-col items-center mt-36">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
        height={100}
        width={300}
      />
      <div className="flex space-x-1 w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 w-5  text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className=" flex-1 outline-none"
        />
        <MicrophoneIcon className="h-5 w-5" />
      </div>
      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-6 sm:space-y-0 sm:flex-row sm:space-x-4 ">
        <button onClick={search} className="btn">
          Google Search
        </button>
        <button onClick={search} className="btn">
          I'm feeling lucky
        </button>
      </div>
    </form>
  );
};

export default Body;
