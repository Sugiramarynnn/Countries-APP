import React from "react";
import LogoIcon from "./Logoicon";
import Mobilelogo from "./Mobilelogo";

const Footer = () => {
  return (
    <footer className="py-7 p-4  w-full flex bg-slate-200 items-center justify-evenly ">
      <div className="w-full max-w-screen-lg flex items-center px-6 justify-between gap-3">
        <LogoIcon />
        <Mobilelogo />
        <p>
          Copyright &copy;{new Date().getFullYear()}.All right reserved for
          frontend@shecancode
        </p>
      </div>
    </footer>
  );
};

export default Footer;
