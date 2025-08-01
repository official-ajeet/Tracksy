import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-500 text-white rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-blue-700 text-xs px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-3">
        <button className="w-full bg-blue-700 hover:bg-blue-800 py-2 text-xs rounded font-semibold">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
