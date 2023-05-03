import React from "react";
import { useRecoilState } from "recoil";
import { isOnboardingDoneRecoil } from "../../atoms";

const Footer = () => {
  const [isOnboardingDone, setIsOnboardingDone] = useRecoilState(
    isOnboardingDoneRecoil
  );
  return (
    <div className="w-screen  fixed bottom-0 ">
      <div className="w-full flex align-middle justify-start bg-black">
        <textarea
          className="w-full rounded-xl bg-black ml-2 mr-2 mb-2 mt-2 p-1"
          placeholder={
            isOnboardingDone
              ? "Type your message here..."
              : "Enter mobile number here"
          }
        ></textarea>
        <div>Send</div>
      </div>
    </div>
  );
};

export default Footer;
