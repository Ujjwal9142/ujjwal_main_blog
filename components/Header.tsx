import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center justify-between px-10 py-5 font-bold space-x-2">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full cursor-pointer"
            width={50}
            height={50}
            alt="logo"
            // src="https://links.papareact.com/1m8"
            src={`/papaReact.png`}
          />
        </Link>
      </div>

      <div>
        <Link
          className="px-5 py-3 text-sm md:text-base bg-gray-900 flex items-center rounded-full text-center text-[#F7AB0A]"
          href="https://www.w3schools.com/"
          target="_blank"
        >
          Start Learning Web Development
        </Link>
      </div>
    </div>
  );
};

export default Header;
