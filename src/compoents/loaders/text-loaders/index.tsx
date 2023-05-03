const TextingLoader = () => {
  return (
    <div className="flex items-center">
      <div className="w-2 h-2 mr-1 bg-gray-800 rounded-full animate-bounce">
        <div className="w-1 h-1 mx-auto bg-gray-100 rounded-full"></div>
      </div>
      <div className="w-2 h-2 mr-1 delay-75 bg-gray-800 rounded-full animate-bounce">
        <div className="w-1 h-1 mx-auto bg-gray-100 rounded-full"></div>
      </div>
      <div className="w-2 h-2 mr-1 delay-150 bg-gray-800 rounded-full animate-bounce">
        <div className="w-1 h-1 mx-auto bg-gray-100 rounded-full"></div>
      </div>
      {/* <span className="font-medium text-gray-800">Typing</span> */}
    </div>
  );
};

export default TextingLoader;
