import React, { useState } from "react";
import MessageBoxReciver from "../MessageBoxReciver/MessageBoxReciver";
import MessageBoxSender from "../MessageBoxSender/MessageBoxSender";
import dark from "./messageBackgroundDark.svg";
import light from "./messageBackgroundLight.svg";
import style from "./MessageBoxBackground.module.css";
import Blur from "../Blur/Blur";

function MessageBoxBackground({ messages }) {
  const [selectedMessageId, setSelectedMessageId] = useState(0);

  return (
    <div
      className={style.messageBackground}
      style={{ backgroundImage: `url(${dark})` }}
    >
      {messages.map((message) =>
        message.owner === "sender" ? (
          <MessageBoxSender
            selectedMessageId={selectedMessageId}
            setSelectedMessageId={setSelectedMessageId}
            key={message.id}
            id={message.id}
          >
            {message.text}
          </MessageBoxSender>
        ) : (
          <MessageBoxReciver
            selectedMessageId={selectedMessageId}
            setSelectedMessageId={setSelectedMessageId}
            key={message.id}
            id={message.id}
          >
            {message.text}
          </MessageBoxReciver>
        )
      )}

      <Blur shown={selectedMessageId !== 0} />
    </div>
  );
}

export default MessageBoxBackground;
