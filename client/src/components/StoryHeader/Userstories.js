import React from "react";
import { NavLink } from "react-router-dom";
import avatarimg from "../../images/demoUserImg.jpg";
import storyStyle from "../../styles/story.module.css";
import logo from "../../images/instaStorylogo.png";
import multyplysymbol from "../../images/multiplyicon.png";
import Avatar from "@material-ui/core/Avatar";
export default function Userstories(props) {
  return (
    <div className={storyStyle.ext_div}>
      <NavLink to="/home">
        <img className={storyStyle.logo} alt="..." src={logo}></img>
      </NavLink>
      <NavLink to="/home">
        <img className={storyStyle.mSymbol} alt=".." src={multyplysymbol}></img>
      </NavLink>

      <div className={storyStyle.center_div}>
        <div className={storyStyle.userImgandName}>
          <Avatar alt="..." src={avatarimg} />
          <h5>sahil@smarty112._.cool{props.data.userName}</h5>
        </div>

        <div className={storyStyle.video}>
          <img
            src="https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png"
            alt="..."
          />
          {/* <YouTube videoId="2g811Eo7K8U" opts={opts} /> */}
        </div>

        <input
          type="text"
          className={storyStyle.replyField}
          placeholder="  Reply to ..."
        ></input>
      </div>
    </div>
  );
}
