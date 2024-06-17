import React from "react";

export default function Menu() {
  return (
<>
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a href="/" className="btn btn-ghost font-bold text-xl">Taylor Merwin</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href="/projects">projects</a></li>
    </ul>
  </div>
</div>
</>
  );
}
