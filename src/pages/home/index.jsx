import React from "react";
import s from "./home.module.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Chat from "../../components/chat/Chat";

const HomePage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}; 

export default HomePage;
