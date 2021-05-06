import React, { useEffect, useState, useRef } from "react";
import chatStyle from "../../styles/chat.module.css";

import { Avatar, IconButton } from "@material-ui/core";

import MicIcon from "@material-ui/icons/MicNoneOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

export default function Chat(props) {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    setMessages([...messages, input]);

    setInput("");
  };
  return (
    <div className={chatStyle.chat_container}>
      <div className={chatStyle.chat_header}>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className={chatStyle.header_info}>
          <h3>{props.userName.userName}</h3>
          <p>Last seen at{new Date().toLocaleTimeString()}</p>
        </div>
      </div>
      <div className={chatStyle.chat_body}>
        {messages?.map((message, i) => {
          return (
            <div key={i}>
              <p
                className={`${chatStyle.message} ${true && chatStyle.receiver}`}
              >
                {message}
              </p>
            </div>
          );
        })}
        <div ref={divRef} />
      </div>
      <div className={chatStyle.chat_footer}>
        <IconButton>
          <SentimentVerySatisfiedIcon style={{ color: "gray" }} />
        </IconButton>

        <form>
          <input
            className={chatStyle.chat__input}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="enter yor message..."
          />

          <button type="submit" onClick={sendMessage}></button>
        </form>
        <IconButton>
          <MicIcon style={{ color: "gray" }} />
        </IconButton>
      </div>
    </div>
  );
}
