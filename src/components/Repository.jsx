import smallLogo from "../assets/smallLogo.png";
import down from "../assets/chevron-down.png";
import code from "../assets/code.png";
import home from "../assets/home.png";
import blackhome from "../assets/blackhome.png";
import cloud from "../assets/cloud.png";
import book from "../assets/book.png";
import gear from "../assets/gear.png";
import phone from "../assets/phone.png";
import signout from "../assets/sign-out.png";
import refresh from "../assets/refresh.png";
import plus from "../assets/plus.png";
import search from "../assets/search.png";
import ellipse from "../assets/ellipse.png";
import database from "../assets/database.png";
import bars from "../assets/bars.png";
import close from "../assets/close.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuItem from "./MenuItem";
import repositories from "../data/reposiotries";

const Repository = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      {/* Backdrop layer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-10 bg-gray-500 opacity-50 z-0"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Navbar for smaller screen */}
      <div className="Navbar w-full flex justify-between items-center md:hidden px-3 sm:px-6 py-4">
        <p className="flex gap-2 justify-start items-center cursor-pointer">
          <img src={smallLogo} alt="Small Logo" className="w-[24px]" />
          <span className="text-2xl font-light">CodeAnt AI</span>
        </p>
        {isOpen ? (
          <img
            src={close}
            alt="cross"
            className="w-[14px] cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <img
            src={bars}
            alt="hamberger"
            className="w-[18px] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
        {/* Navbar Component for Small Screen */}
        {isOpen && (
          <div className="absolute top-0 pb-2  w-[99.5vw] -translate-x-3 flex flex-col justify-center items-center bg-white border-0">
            <div className="w-full flex justify-between items-center md:hidden px-3 sm:px-6 py-4">
              <p className="flex gap-2 justify-start items-center cursor-pointer">
                <img src={smallLogo} alt="Small Logo" className="w-[24px]" />
                <span className="text-2xl font-light">CodeAnt AI</span>
              </p>
              {isOpen ? (
                <img
                  src={close}
                  alt="cross"
                  className="w-[14px] cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <img
                  src={bars}
                  alt="hamberger"
                  className="w-[18px] cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              )}
            </div>
            <div className="flex justify-between items-center w-[95%] gap-3 px-2 py-2 mt-3 cursor-pointer rounded-md border border-[#E9EAEB]">
              <span>UtkarshDhairyaPanwar</span>
              <img src={down} alt="Down Icon" className="w-[13.51px]" />
            </div>
            <MenuItem icon={blackhome} label="Repositories" />
            <MenuItem icon={code} label="AI Code Review" />
            <MenuItem icon={cloud} label="Cloud Security" />
            <MenuItem icon={book} label="How to Use" />
            <MenuItem icon={gear} label="Settings" />
            <MenuItem icon={phone} label="Support" />
            <MenuItem
              icon={signout}
              label="Logout"
              onClick={() => navigate("/login")}
            />
          </div>
        )}
      </div>
      {/* Left Side bar */}
      <div className="left relative hidden md:flex w-[17%] min-w-[232px] flex-col justify-between h-screen px-4 text-[#181D27]">
        {/* Top Section */}
        <div>
          <p className="mt-5 mb-4 ml-2 flex gap-3 justify-start items-center cursor-pointer">
            <img src={smallLogo} alt="Small Logo" className="w-[24px]" />
            <span className="text-2xl font-light">CodeAnt AI</span>
          </p>
          <div className="flex justify-center items-center w-fit gap-3 px-5 py-2 cursor-pointer rounded-md border border-[#E9EAEB]">
            <span>UtkarshDhairyaPa...</span>
            <img src={down} alt="Down Icon" className="w-[13.51px]" />
          </div>
          <div className="flex justify-start items-center gap-3 px-4 py-2 mt-3 rounded-md font-medium bg-[#1570EF] hover:bg-[#0059d6] text-white w-[95%] cursor-pointer">
            <img src={home} alt="Home" />
            <span>Repositories</span>
          </div>
          <MenuItem icon={code} label="AI Code Review" />
          <MenuItem icon={cloud} label="Cloud Security" />
          <MenuItem icon={book} label="How to Use" />
          <MenuItem icon={gear} label="Settings" />
        </div>

        {/* Bottom Section */}
        <div className="mb-5">
          <MenuItem icon={phone} label="Support" />
          <MenuItem
            icon={signout}
            label="Logout"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
      {/* right Side */}
      <div className="right w-full md:w-[83%] p-0 md:p-4 h-[90vh] md:h-screen flex justify-center items-center bg-[#FAFAFA]">
        <div className="w-full flex mt-0 md:mt-5 flex-col bg-white text-[#181D27] h-full md:h-[95vh] border border-[#dde5ed] md:rounded-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-2.5 sm:px-5 py-3 md:py-5 gap-2 sm:gap-0">
            <h3 className="text-3xl font-[600] flex flex-col justify-center items-start">
              <span>Repositories</span>
              <span className="text-sm font-normal text-[#414651]">
                33 total repositories
              </span>
            </h3>
            <div className="flex justify-center items-center gap-2 sm:gap-3 text-sm font-medium">
              <div className="flex justify-center items-center gap-2 px-3 sm:px-4 py-2 border border-[#D5D7DA] hover:bg-[#FAFAFA] cursor-pointer rounded-lg">
                <img src={refresh} alt="Refresh" />
                <span>Refresh All</span>
              </div>
              <div className="flex justify-center bg-[#1570EF] hover:bg-[#0059d6] cursor-pointer items-center text-white gap-2 px-3 sm:px-4 py-2 rounded-lg">
                <img src={plus} alt="Plus" />
                <span>Add Repository</span>
              </div>
            </div>
          </div>
          <div className="w-[30%] min-w-[200px] flex justify-start items-center mx-2.5 sm:mx-5 gap-3 px-3 py-2 border border-[#D5D7DA] rounded-lg">
            <img src={search} alt="Search Icon" className="w-[15px] pt-0.5" />
            <input
              type="text"
              className="text-[#414651] placeholder:text-[#414651] outline-none w-full"
              placeholder="Search Repositories"
            />
          </div>
          <hr className="w-full mt-4" />
          {/* Loop through Repositories data */}
          <div className="w-full overflow-scroll overflow-x-hidden">
            {repositories.map((repo, index) => (
              <div
                key={index}
                className="w-full flex py-6 flex-col items-start justify-center px-2.5 sm:px-5 gap-2 border-t border-[#D5D7DA] hover:bg-[#F5F5F5] cursor-pointer"
              >
                <div className="flex justify-center items-center gap-3">
                  <p className="text-lg font-medium">{repo.name}</p>
                  <span className="text-xs px-2 font-[400] bg-sky-50 py-0.5 border border-[#B2DDFF] text-[#175CD3] rounded-full">
                    {repo.visibility}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-3 sm:gap-8">
                  <div className="flex justify-center text-sm sm:text-sm font-[400] items-center gap-1">
                    <span>{repo.language}</span>
                    <img src={ellipse} alt="dot" />
                  </div>
                  <div className="flex justify-center text-sm sm:text-sm font-[400] items-center gap-1">
                    <img src={database} alt="Database Icon" />
                    <span>{repo.size}</span>
                  </div>
                  <span className="text-sm sm:text-sm font-[400]">
                    Updated {repo.updatedAt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
