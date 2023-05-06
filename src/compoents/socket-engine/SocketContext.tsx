import React, { createContext, useContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const SocketContext = createContext<Socket | null>(null);

export const useSocket = () => useContext(SocketContext)!;

export const SocketProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  console.log("in content", socket);

  useEffect(() => {
    const newSocket = io("https://oto-be-sathya.onrender.com", {
      transports: ["websocket"],
      withCredentials: true,
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
