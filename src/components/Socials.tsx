import React from "react";

export default function Socials() {
  return (
    <>
      <div className="flex flex-row justify-center space-x-8 lg:space-x-12 mb-8">
        <a href="https://github.com/taylormerwin" rel="noopener noreferrer">
          <img src="github.svg" alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/taylormerwin/"
          rel="noopener noreferrer"
        >
          <img src="linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/taylormerwin" rel="noopener noreferrer">
          <img src="twitterx.svg" alt="TwitterX" />
        </a>
      </div>
    </>
  );
}
