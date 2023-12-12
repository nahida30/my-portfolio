import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import logo from '/public/images/logo.png';
import Banner from "../Main/Banner";
import About from "../Main/About";
import Skills from "../Main/Skills/Skills";
import MyJourney from "../Main/MyJourney/MyJourney";
import RecentWorks from "../Main/RecentWorks/RecentWorks";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div>
      <div className="navbar bg-base-100 items-center justify-between mx-auto p-4  shadow-md sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl">
              <li><a href="/">Home</a></li>
              <li><a href="#section_1">About</a></li>
              <li><a href="#section_2">Skills</a></li>
              <li><a href="#section_3">My Journey</a></li>
              <li><a href="#section_4">Recent Works</a></li>
            </ul>
          </div>
          <div className=" flex  normal-case text-xl">
            <img src={logo} className='h-12 ml-6'/><p className='-ml-[12] font-bold mt-5'>Nahida</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ScrollspyNav
            scrollTargetIds={["section_1", "section_2", "section_3", "section_4"]}
            offset={100}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
          >
            <ul className="menu menu-horizontal px-1 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-xl">
              <li><a href="/">Home</a></li>
              <li><a href="#section_1">About</a></li>
              <li><a href="#section_2">Skills</a></li>
              <li><a href="#section_3">My Journey</a></li>
              <li><a href="#section_4">Recent Works</a></li>
            </ul>
          </ScrollspyNav>
        </div>
        <div className="navbar-end">
          <Link to='/login'>
            <button className="btn btn-outline">Login</button>
          </Link>
        </div>
        <label className="swap swap-rotate">
          <input type="checkbox" onChange={handleToggle} />
          <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        </label>
      </div>

      <div>
        <div  style={{"height": "600px"}}><span><Banner></Banner></span></div>
        <div   id="section_1" style={{"height": "600px"}}><span></span><About></About></div>
        <div  id="section_2" style={{"height": "600px"}}><span> <Skills></Skills> </span></div>
        <div id="section_3" style={{"height": "600px"}}><span> <MyJourney></MyJourney> </span></div>
        <div id="section_4" style={{"height": "600px"}}><span> <RecentWorks></RecentWorks> </span></div>
      </div>
    </div>
  );
};

export default Navbar;
