import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isOnboardingDoneRecoil } from "../../atoms";
import { useSocket } from "../socket-engine/SocketContext";
import { useParams } from "react-router-dom";

const Footer = () => {
  const socket = useSocket();
  const { id } = useParams();
  const [message, setMessage] = useState<string>("");

  const sendMessage = () => {
    console.log({ message });
    if (message !== "") {
      socket.emit("message", {
        message: { body: message, userId: sessionStorage.getItem("userId") },
        roomId: id,
      });
      setMessage("");
    }
  };
  return (
    <div className="w-screen  fixed bottom-0 flex align-middle">
      <div className="w-full flex align-middle justify-start bg-black">
        <textarea
          value={message}
          className="w-full rounded-xl bg-black ml-2 mr-2 mb-2 mt-2 p-1"
          placeholder={"Type your message here..."}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div
          onClick={() => sendMessage()}
          className="flex align-middle pl-1 pr-1 cursor-pointer w-1/5 text-center m-auto"
        >
          Send
        </div>
      </div>
    </div>
  );
};

export default Footer;
