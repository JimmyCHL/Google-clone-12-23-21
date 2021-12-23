import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "../Index/Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term.trim()) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          className="cursor-pointer"
          height={45}
          width={120}
          onClick={() => router.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
        />
        <form className="flex flex-1 border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-1 w-full outline-none"
          />
          <XIcon
            onClick={() => {
              searchInputRef.current.value = "";
            }}
            className="h-7 w-7 sm:mr-3 cursor-pointer hover:scale-125 transition duration-100 ease-out"
          />
          <MicrophoneIcon className="h-5  text-blue-500 hidden sm:inline-flex border-l-2 pl-4 border-gray-300" />
          <SearchIcon
            onClick={search}
            className="h-5 hidden text-blue-500 ml-2 sm:inline-flex"
          />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto h-12"
          url="https://media-exp1.licdn.com/dms/image/C5103AQGYCgNgBbWF1A/profile-displayphoto-shrink_200_200/0/1552598637144?e=1645660800&v=beta&t=l2772liPmrtWnjLVl1s1wmUuvBeR1Uqmn0zKCM97eX8"
        />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
