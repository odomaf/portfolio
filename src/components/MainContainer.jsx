import React from "react";

export default function MainContainer({ children }) {
  return (
    <div className="bg-white rounded-2xl mx-auto my-4 px-6 py-4 max-w-3xl min-h-[80vh] shadow-lg flex flex-col border-4 border-green-400 flex-1">
      {children}
    </div>
  );
}
