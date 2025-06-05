import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-purple-500  text-black rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-purple-600 text-white text-xs px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-3">
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 text-xs rounded font-semibold">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
