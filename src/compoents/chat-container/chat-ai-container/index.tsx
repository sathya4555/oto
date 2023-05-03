import React from "react";
import { ChatBodyPropType } from "../chat-container-right";

const ChatAiContainer = (props: ChatBodyPropType) => {
  return (
    <div className="w-screen flex justify-center">
      <p className="border border-gray-300 p-4 w-4/5 rounded-2xl ">
        {props.chatBody}
      </p>
    </div>
  );
};

export default ChatAiContainer;
