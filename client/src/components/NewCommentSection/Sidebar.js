import React from "react";
import sidebarStyle from "../../styles/sidebar.module.css";
import { IconButton } from "@material-ui/core";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import Sidebarchats from "./Sidebarchat";
export default function Sidebar(props) {
  return (
    <div className={sidebarStyle.sidebar}>
      <div className={sidebarStyle.sidebar_header}>
        <p> UserNames</p>
        <div className={sidebarStyle.headerRight}>
          <IconButton>
            <FindInPageIcon />
          </IconButton>
        </div>
      </div>

      <div className={sidebarStyle.sidebar_chats}>
        {props.data.map((val, i) => {
          return <Sidebarchats key={i} userName={val.userName} />;
        })}
      </div>
    </div>
  );
}
