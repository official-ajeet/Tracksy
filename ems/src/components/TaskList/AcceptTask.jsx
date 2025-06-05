import React from "react";

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-500 text-white rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-green-700 text-xs px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="flex justify-between gap-2 mt-4">
        <button
          onClick={onComplete}
          className="w-1/2 bg-blue-700 hover:bg-blue-800 py-2 text-xs rounded font-semibold"
        >
          Mark Completed
        </button>
        <button
          onClick={onFail}
          className="w-1/2 bg-red-700 hover:bg-red-800 py-2 text-xs rounded font-semibold"
        >
          Mark Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
