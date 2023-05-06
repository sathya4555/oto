import { ChatBodyPropType } from "../chat-container-right";
import TextingLoader from "../../loaders/text-loaders";

const ChatContainerLeft = (props: ChatBodyPropType) => {
  return (
    <div className="flex justify-start w-screen" key={`left${props.index}`}>
      <div className="overflow-normal break-words max-w-[calc(100vw-50px)] mt-2 mb-3 text-left fle-col text-s flex align-center justify-between rounded-tl-3xl rounded-tr-3xl rounded-br-3xl border border-gray-500 ml-1 p-4">
        {props.isLoading ? <TextingLoader /> : <div>{props.chatBody}</div>}
      </div>
    </div>
  );
};

export default ChatContainerLeft;
