import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center">
      <h1>
        Chargement
        <span className="animate-bounce w-2">.</span>
        <span className="animate-bounce w-2">.</span>
        <span className="animate-bounce w-2">.</span>
      </h1>
    </div>
  );
};

export default Loading;
