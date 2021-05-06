import React, { useState, useRef, useEffect } from "react";
import Header from "../Header";
import commentStyle from "../../styles/Comment.module.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useParams } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

export default function Comment(props) {
  const userName = useParams();
  var divRef = useRef(null);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      });
    };
  });
  useEffect(() => {
    if (!userName.userName) {
      TweenMax.from(divRef, 1, {
        x: 2000,
        duration: 0.5,
        ease: Power3.easeIn,
      });
    }
  }, [userName.userName]);

  if (screenSize <= 469) {
    return (
      <>
        <div ref={(el) => (divRef = el)}>
          <Header />
          <div>
            {userName.userName ? (
              <div style={{ height: "90vh" }}>
                <Chat userName={userName} />
              </div>
            ) : (
              <div>
                <Sidebar data={props.data} />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  return (
    <div ref={(el) => (divRef = el)}>
      <Header />
      <div className={commentStyle.ext_div}>
        <div className={commentStyle.center_div}>
          <Sidebar data={props.data} />
          {userName.userName ? <Chat userName={userName} /> : null}
        </div>
      </div>
    </div>
  );
}
