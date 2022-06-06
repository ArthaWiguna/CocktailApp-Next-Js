import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-between w-full bg-[#16181B] py-1 px-5">
      <div>
        <p className="text-[#51545A]"> ©️ 2022 - Artha Wiguna</p>
      </div>
      <div className="flex gap-8">
        <a href="/" className="text-[#FF9100]">
          instagram
        </a>
        <a href="/" className="text-[#51545A]">
          facebook
        </a>
        <a href="/" className="text-[#51545A]">
          twitter
        </a>
        <a href="/" className="text-[#51545A]">
          youtube
        </a>
      </div>
      <div>
        <p className="text-[#51545A]">Next.Js - Tailwind - Redux</p>
      </div>
    </div>
  );
};
