import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const [localRoomId, setLocalRoomId] = useState<string>();
  const [stepNumber, setStepNumber] = useState(0);
  const [isCopyClicked, setIsCopyClicked] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("userId")) {
      navigate("/home");
    }
  }, []);

  const handleGenerateRoom = () => {
    navigate(`/chat/${localRoomId}`);
  };

  const handleClickGenerateRoom = () => {
    setLocalRoomId(randomString());
    setStepNumber(2);
  };

  const randomString = () => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 7);
    return `${timestamp}-${random}`;
  };

  const handleSetStepNumber = (stepNumber: number) => {
    setStepNumber(stepNumber);
  };
  const handleClickCopy = () => {
    if (localRoomId) {
      navigator.clipboard.writeText(localRoomId);
      setIsCopyClicked(true);
    }
  };
  return (
    <div className="flex-col w-screen h-screen pt-40 overflow-auto justify-evenly">
      <div className="flex w-screen align-middle h-1/3 justify-evenly">
        <div>
          <p className="text-6xl text-neutral-600 ">O</p>
        </div>
        <div>
          <p className="text-6xl text-neutral-600">T</p>
        </div>
        <div>
          <p className="text-6xl text-neutral-600">O</p>
        </div>
      </div>
      {stepNumber === 0 && (
        <div className="w-screen align-top h-2/3 ">
          <div className="justify-center p-20 cursor-pointer align-center ">
            <p
              className="text-2xl line-clamp-6 "
              onClick={() => handleSetStepNumber(1)}
            >
              JOIN ROOM
            </p>
          </div>

          <div className="justify-center cursor-pointer align-center">
            <p className="text-2xl" onClick={handleClickGenerateRoom}>
              CREATE ROOM
            </p>
          </div>
        </div>
      )}
      {stepNumber === 1 && (
        <div className="w-screen align-top h-2/3 ">
          <div className="w-screen m-auto text-center align-middle justify-evenly">
            <div className="w-full ">
              <input
                className="w-4/5 h-10 p-1 ml-10 mr-10 text-center rounded-xl text-l"
                placeholder="Enter Room Id"
                onChange={(e) => setLocalRoomId(e.target.value)}
              />
            </div>

            <div
              className="flex h-10 p-10 align-bottom cursor-pointer"
              onClick={handleGenerateRoom}
            >
              <div className="w-full h-full mt-2">Start</div>
            </div>
          </div>
        </div>
      )}

      {stepNumber === 2 && !isCopyClicked && (
        <div className="w-screen align-top h-2/3 ">
          <div className="justify-center p-6 cursor-pointer align-center ">
            <p className="text-2xl line-clamp-6 ">
              <u>Generated Room ID</u>
            </p>
          </div>

          <div className="flex align-middle cursor-pointer align-center justify-evenly">
            <div>
              <p className="text-2xl">{localRoomId && localRoomId}</p>
            </div>

            <div className="m-1" onClick={() => handleClickCopy()}>
              COPY
            </div>
          </div>
        </div>
      )}

      {stepNumber === 2 && isCopyClicked && (
        <div className="w-screen align-top h-2/3 ">
          <div className="justify-center p-6 cursor-pointer align-center ">
            <p className="text-3xl line-clamp-6 " onClick={handleGenerateRoom}>
              LETS GO!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
