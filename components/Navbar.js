import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/asset/logo-zira.png";
import search from "../public/asset/ico_search.svg";
import keranjang from "../public/asset/keranjang.svg";
import ig from "../public/asset/Instagram.svg";
import vk from "../public/asset/VK.svg";
import twitter from "../public/asset/Twitter.svg";
import styles from "../styles/Home.module.css";

// store
import { useDispatch } from "react-redux";
import { fetchAsyncSearchDrink, fetchAsyncDrink } from "../features/drinkSlice";

export const Navbar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    keyword !== ""
      ? dispatch(fetchAsyncSearchDrink(keyword))
      : dispatch(fetchAsyncDrink);
  };

  return (
    <div className="flex">
      <Image
        src={logo}
        alt="logo-zira"
        width="214"
        height="106"
        className="mt-10"
      />
      <div className="flex justify-end gap-10 ml-auto w-ful flex-wrap">
        <div className="flex justify-between mx-auto gap-5">
          <Image src={ig} alt="ig" />
          <Image src={vk} alt="ig" />
          <Image src={twitter} alt="ig" />
          <Image src={vk} alt="ig" />
        </div>
        <div className="flex gap-8">
          <ul className="flex">
            <li className="mr-10">
              <a href="/" className="text-[#51545A]">
                Home
              </a>
            </li>
            <li className="mr-10">
              <a href="/" className="text-[#51545A]">
                Service
              </a>
            </li>
            <li className="mr-10">
              <a href="/" className="text-[#51545A]">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-[#51545A]">
                Contact
              </a>
            </li>
          </ul>
          <button className="w-28 h-10 bg-[#FF9100] text-black rounded-3xl font-bold">
            Sign In
          </button>
        </div>
        <div>
          <div className="w-[1200px] h-[1px] bg-[#36393E] -mt-7"></div>
          <div className="flex justify-end gap-5 mt-3">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                className="bg-transparent border-b-2 border-[#36393E] text-white px-5 py-2 focus:text-white"
                onChange={(e) => setKeyword(e.target.value)}
              />
            </form>
            <Image src={search} alt="search" width="24" height="24" />
            <p className="text-[#FF9100] mt-2">
              <Image src={keranjang} alt="search" width="24" height="24" />
              <span className="ml-2">00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
