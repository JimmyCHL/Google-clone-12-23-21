import React from "react";
import Avatar from "./Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="flex w-full p-4 justify-between text-sm text-gray-700 font-semibold">
      {/*left section */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      {/*right section*/}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Image</p>
        {/* Icon */}
        <ViewGridIcon className="h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-gray-100" />
        {/* Avatar */}
        <Avatar url="https://media-exp1.licdn.com/dms/image/C5103AQGYCgNgBbWF1A/profile-displayphoto-shrink_200_200/0/1552598637144?e=1645660800&v=beta&t=l2772liPmrtWnjLVl1s1wmUuvBeR1Uqmn0zKCM97eX8" />
      </div>
    </div>
  );
};

export default Header;
