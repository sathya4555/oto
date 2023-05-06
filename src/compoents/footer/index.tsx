import { useState } from "react";
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
    <div className="fixed bottom-0 flex w-screen align-middle">
      <div className="flex justify-start w-full align-middle bg-black">
        <textarea
          value={message}
          className="w-full p-1 mt-2 mb-2 ml-2 mr-2 bg-black rounded-xl"
          placeholder={"Type your message here..."}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div
          onClick={() => sendMessage()}
          className="flex w-1/5 pl-1 pr-1 m-auto text-center align-middle cursor-pointer"
        >
          Send
        </div>
      </div>
    </div>
  );
};

export default Footer;
