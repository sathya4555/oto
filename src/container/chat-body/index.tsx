import React, { useEffect, useState } from "react";
import ChatContainerLeft from "../../compoents/chat-container/chat-container-left";
import { ChatContainerRight } from "../../compoents/chat-container/chat-container-right";
import ChatAiContainer from "../../compoents/chat-container/chat-ai-container";
import { useSocket } from "../../compoents/socket-engine/SocketContext";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { roomIdRecoil } from "../../atoms";

export interface MessageType {
  body: string;
  userId: string;
}

const globalMessage: MessageType[] = [];

const ChatBody = () => {
  const socket = useSocket();
  const { id } = useParams();
  const [messages, setMessages] = useState<MessageType[]>(globalMessage);

  console.log({ socket });

  useEffect(() => {
    if (socket) {
      socket.emit("join-room", id);

      socket.on("message", (message) => {
        // Handle incoming message
        console.log({ message });
        const tempMessage = [...messages];
        tempMessage.push(message);
        globalMessage.push(message);
        setMessages([...tempMessage]);
      });

      return () => {
        socket.emit("leave-room", "roomId");
        socket.off("message");
      };
    }
  }, [socket]);

  function sendMessage(message: string) {
    socket.emit("message", {
      message: { body: "test", userId: sessionStorage.getItem("userId") },
      roomId: id,
    });
  }

  const generateChat = (message: any) => {
    const userId = sessionStorage.getItem("userId");
    console.log("item", message);
    if (userId === message.message.userId) {
      return <ChatContainerRight chatBody={message.message.body} />;
    } else return <ChatContainerLeft chatBody={message.message.body} />;
  };
  return (
    <div className="h-[calc(100vh-125px)] overflow-auto hover:overflow-scroll">
      {messages.map((item) => {
        return generateChat(item);
      })}

      <div onClick={() => sendMessage("test world")}>send message</div>
    </div>
  );
};

export default ChatBody;
