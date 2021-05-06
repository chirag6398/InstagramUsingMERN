import React, { useEffect, useState } from "react";
import sidebarchatStyle from "../../styles/sidebarChat.module.css";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Sidebarchat(props) {
  const history = useHistory();
  const [seed, setSeed] = useState("");
  const sideChatHandler = () => {
    history.push(`/comment/${props.userName}`);
  };
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className={sidebarchatStyle.container} onClick={sideChatHandler}>
      <div className={sidebarchatStyle.sidebarchat_info}>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <h3>{props.userName}</h3>
      </div>
    </div>
  );
}
