import React from "react";
import s from "../sidebar.module.scss";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <span>Strange Chat</span>
      <div className={s.user}>
        <img src="" alt="" />
        <span>John Butter</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
