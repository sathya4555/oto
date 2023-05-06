import { useEffect, useRef, useState } from "react";
import ChatContainerLeft from "../../compoents/chat-container/chat-container-left";
import { ChatContainerRight } from "../../compoents/chat-container/chat-container-right";

import { useSocket } from "../../compoents/socket-engine/SocketContext";
import { useParams } from "react-router-dom";

export interface MessageType {
  body: string;
  userId: string;
}

const globalMessage: MessageType[] = [];

const ChatBody = () => {
  const socket = useSocket();
  const { id } = useParams();
  const chatContainerRef = useRef<any>();
  const [messages, setMessages] = useState<MessageType[]>(globalMessage);
  useEffect(() => {
    // Update the scroll position of the chat container
    // to the bottom when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

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

  const generateChat = (message: any, index: number) => {
    const userId = sessionStorage.getItem("userId");
    console.log("item", message);
    if (userId === message.message.userId) {
      return (
        <ChatContainerRight chatBody={message.message.body} index={index} />
      );
    } else
      return (
        <ChatContainerLeft chatBody={message.message.body} index={index} />
      );
  };
  return (
    <div
      ref={chatContainerRef}
      className="h-[calc(100vh-125px)] overflow-scroll "
    >
      {messages.map((item, index) => {
        return generateChat(item, index);
      })}
    </div>
  );
};

export default ChatBody;
