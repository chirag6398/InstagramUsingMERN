import React, { useState, useEffect, useRef } from "react";
import headerStyle from "../styles/header.module.css";
import instaLogo from "../images/instaLogo.png";

import avatarimg from "../images/demoUserImg.jpg";

import { NavLink, useParams } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Dropdown from "./Dropdown";
import { TweenMax, Power3 } from "gsap";
export default function Header() {
  const active_page = useParams();
  let dropRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropDownHandler = () => {
    setShowDropdown(!showDropdown);
  };
  useEffect(() => {
    if (showDropdown) {
      TweenMax.from(dropRef, {
        duration: 0.5,
        opacity: 0,
        ease: Power3.easeIn,
      });
    }
  });

  return (
    <div className={headerStyle.ext_div}>
      <div className={headerStyle.header__logo}>
        <NavLink activeClassName={headerStyle.active} to={`/home`}>
          <img src={instaLogo} alt=".." />
        </NavLink>
      </div>

      <div className={headerStyle.header__input}>
        <SearchIcon
          style={{ color: "gray", position: "relative", left: "59px" }}
        />
        <input type="text" placeholder="Search" className={headerStyle.input} />
      </div>

      <div className={headerStyle.links}>
        <div>
          <NavLink to="/home">
            <IconButton style={{ width: "20px" }}>
              {active_page.page === "home" ||
              (active_page && !active_page.page) ? (
                <HomeRoundedIcon style={{ color: "black" }} />
              ) : (
                <HomeOutlinedIcon style={{ color: "black" }} />
              )}
            </IconButton>
          </NavLink>
        </div>
        <div>
          <NavLink to={`/commentsection/${"comment"}`}>
            <IconButton style={{ width: "20px" }}>
              {active_page.page === "comment" ? (
                <SendRoundedIcon style={{ color: "black" }} />
              ) : (
                <SendOutlinedIcon style={{ color: "black" }} />
              )}
            </IconButton>
          </NavLink>
        </div>
        <div>
          <IconButton style={{ width: "20px" }}>
            <ExploreIcon style={{ color: "black" }} />
          </IconButton>
        </div>
        <div>
          <IconButton style={{ width: "20px" }}>
            <FavoriteIcon style={{ color: "black" }} />
          </IconButton>
        </div>
        <div>
          <Avatar
            alt="..."
            onClick={dropDownHandler}
            style={{ cursor: "pointer" }}
            src={avatarimg}
          />
          {showDropdown ? (
            <div
              ref={(el) => {
                dropRef = el;
              }}
            >
              <Dropdown />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
