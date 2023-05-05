import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isOnboardingDoneRecoil } from "../../atoms";
import { useSocket } from "../socket-engine/SocketContext";
import { useParams } from "react-router-dom";

const Footer = () => {
  const [isOnboardingDone, setIsOnboardingDone] = useRecoilState(
    isOnboardingDoneRecoil
  );

  const socket = useSocket();
  const { id } = useParams();
  const [message, setMessage] = useState<string>("");

  const sendMessage = () => {
    if (message !== "") {
      socket.emit("message", {
        message: { body: message, userId: sessionStorage.getItem("userId") },
        roomId: id,
      });
    }
  };
  return (
    <div className="w-screen  fixed bottom-0 flex align-middle">
      <div className="w-full flex align-middle justify-start bg-black">
        <textarea
          className="w-full rounded-xl bg-black ml-2 mr-2 mb-2 mt-2 p-1"
          placeholder={
            isOnboardingDone
              ? "Type your message here..."
              : "Enter mobile number here"
          }
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div
          onClick={sendMessage}
          className="flex align-middle pl-1 pr-1 cursor-pointer w-1/5 text-center m-auto"
        >
          <div className="w-full text-center flex align-middle m-auto">
            Send
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
