import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { roomIdRecoil } from "../../atoms";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState<string | null>(
    sessionStorage.getItem("userId")
  );
  const [roomId, setRoomId] = useRecoilState(roomIdRecoil);
  const [mobileNumber, setMobileNumber] = useState("");

  const handleGenerateRoom = () => {
    const id = randomString();
    // setRoomId(id);
    navigate(`/chat/${id}`);
  };

  const randomString = () => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 7);
    return `${timestamp}-${random}`;
  };

  const handleSubmitNumber = () => {
    setIsUser(mobileNumber);
    sessionStorage.setItem("userId", mobileNumber);
  };

  return (
    <div className="h-[calc(100vh-125px)] overflow-auto hover:overflow-scroll">
      {isUser ? (
        <div onClick={handleGenerateRoom}>generate room</div>
      ) : (
        <div>
          <input
            type="number"
            className="w-screen p-5 m-2"
            placeholder="Enter Mobile number"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <div className="w-screen p-5 m-10" onClick={handleSubmitNumber}>
            submit
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
