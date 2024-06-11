import React from "react";
import Header from "./Header";
import Socials from "./Socials";
import Avatar from "./Avatar";

export default function Intro() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center md:w-2/3">
        <Header />
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-2/3 flex justify-center md:pl-8">
            <Avatar />
          </div>
          <div className="">
            <p className="ml-4 mr-2 m-8">
              I am a recent Computer Science and Systems graduate from the University of Washington Tacoma with a
              passion for building user-centered experiences for the web and
              mobile.<br/><br/>Seeking opportunities to leverage my expertise to
              create modern and scalable applications.<br/><br/>Experienced in
              back-end development with Node.js and Express.js, and front-end
              development with React and Tailwind CSS.<br/><br/>I can be reached via social media or at <a className="hover:text-primary" href="mailto:taylor.merwin@gmail.com">taylor.merwin@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Socials />
        </div>
      </div>
    </div>
  );
}
