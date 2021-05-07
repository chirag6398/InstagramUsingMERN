import React from "react";
import sugestionStyle from "../../styles/sugestion.module.css";
import duserImg from "../../images/storyimg.jpg";
export default function Sugetion({ user }) {
  return (
    <div className={sugestionStyle.sugestion_container}>
      <div className={sugestionStyle.sugestion_userSection}>
        <img
          alt="..."
          src={duserImg}
          style={{
            height: "65px",
            padding: "3px 3px",
            objectFit: "contain",
            border: "1px solid rgb(243, 38, 38)",
            borderRadius: "123px",
          }}
        />
        <div className={sugestionStyle.user_follow_style}>
          <p>{user ? <span>{user}</span> : "chirag112_agrawal"}</p>
          <p style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}>
            Switch
          </p>
        </div>
      </div>
      <div className={sugestionStyle.sugestion_userSection}>
        <div className={sugestionStyle.user_follow_style}>
          <b style={{ color: "gray" }}>suggestions for you</b>
          <b style={{ marginLeft: "30px" }}>see all</b>
        </div>
      </div>

      <div className={sugestionStyle.sugestion_userSection}>
        <img
          style={{
            height: "65px",
            padding: "3px 3px",
            objectFit: "contain",
            border: "1px solid rgb(243, 38, 38)",
            borderRadius: "123px",
          }}
          alt="..."
          src={duserImg}
        />
        <div className={sugestionStyle.user_follow_style}>
          <p>user_name</p>
          <p style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}>
            Follow
          </p>
        </div>
      </div>
      <div className={sugestionStyle.sugestion_userSection}>
        <img
          style={{
            height: "65px",
            padding: "3px 3px",
            objectFit: "contain",
            border: "1px solid rgb(243, 38, 38)",
            borderRadius: "123px",
          }}
          alt="..."
          src={duserImg}
        />
        <div className={sugestionStyle.user_follow_style}>
          <p>user_name</p>
          <p style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}>
            Follow
          </p>
        </div>
      </div>
      <div className={sugestionStyle.sugestion_userSection}>
        <img
          style={{
            height: "65px",
            padding: "3px 3px",
            objectFit: "contain",
            border: "1px solid rgb(243, 38, 38)",
            borderRadius: "123px",
          }}
          alt="..."
          src={duserImg}
        />
        <div className={sugestionStyle.user_follow_style}>
          <p>user_name</p>
          <p style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}>
            Follow
          </p>
        </div>
      </div>
      <div className={sugestionStyle.sugestion_userSection}>
        <img
          style={{
            height: "65px",
            padding: "3px 3px",
            objectFit: "contain",
            border: "1px solid rgb(243, 38, 38)",
            borderRadius: "123px",
          }}
          alt="..."
          src={duserImg}
        />
        <div className={sugestionStyle.user_follow_style}>
          <p>user_name</p>
          <p style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}>
            Follow
          </p>
        </div>
      </div>
    </div>
  );
}
