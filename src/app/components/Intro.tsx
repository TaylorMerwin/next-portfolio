import React from "react";

export default function Intro() {
  return (
    <>
      <p className="prose">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        corporis aliquam libero nam ratione commodi quo eveniet maxime
        temporibus repellat aperiam nesciunt, rerum illum laudantium voluptatum
        veniam dicta eos enim?
      </p>
      <div className="flex flex-row space-x-4">
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
          <img src="twitterx.svg" alt="Twitter" />
        </a>
      </div>
    </>
  );
}
