import React from "react";
import TextingLoader from "../../loaders/text-loaders";

export interface ChatBodyPropType {
  chatBody: string;
  isLoading?: boolean;
  index: number;
}

export const ChatContainerRight = (props: ChatBodyPropType) => {
  return (
    <div className="flex justify-end w-screen" key={`right_${props.index}`}>
      <div className="overflow-normal break-words max-w-[calc(100vw-50px)] bg-cyan-50 mt-2 mb-3 text-left fle-col text-s flex  align-right justify-between  rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl border border-gray-500 mr-1 p-4 relative right-0 ">
        {props.isLoading ? (
          <TextingLoader />
        ) : (
          <p className="text-slate-950">{props.chatBody}</p>
        )}
      </div>
    </div>
  );
};
