import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmitNumber = () => {
    if (mobileNumber) {
      sessionStorage.setItem("userId", mobileNumber);
      navigate("/onboarding");
    }
  };

  return (
    <div className="flex-col w-screen h-screen pt-40 overflow-auto justify-evenly">
      {/* {isUser ? (
    <div onClick={handleGenerateRoom}>generate room</div>
  ) : ( */}
      {/* <div className="flex-col w-screen h-full align-bottom justify-evenly"> */}
      <div className="flex w-screen align-middle h-1/2 justify-evenly">
        <div>
          <p className="text-6xl">O</p>
        </div>
        <div>
          <p className="text-6xl">T</p>
        </div>
        <div>
          <p className="text-6xl">O</p>
        </div>
      </div>
      <div className="flex w-screen m-auto text-center align-middle justify-evenly">
        <div className="w-4/5 ">
          <input
            type="number"
            className="w-full h-10 p-1 text-center rounded-xl text-l"
            placeholder="Enter Mobile number"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        <div
          className="flex h-10 align-bottom cursor-pointer"
          onClick={handleSubmitNumber}
        >
          <div className="w-full h-full mt-2">Next</div>
        </div>
      </div>
      {/* </div> */}
      {/* )} */}
    </div>
  );
};

export default Home;
