import { ChatBodyPropType } from "../chat-container-right";

const ChatAiContainer = (props: ChatBodyPropType) => {
  return (
    <div className="flex justify-center w-screen">
      <p className="w-4/5 p-4 border border-gray-300 rounded-2xl ">
        {props.chatBody}
      </p>
    </div>
  );
};

export default ChatAiContainer;
