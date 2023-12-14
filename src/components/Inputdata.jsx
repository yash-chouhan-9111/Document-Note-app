// Updated Inputdata component
import React, { useState } from "react";

const Inputdata = ({ handleAddData }) => {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [fileValue, setFileValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleAdd = () => {
    handleAddData({
      desc: inputValue,
      fileSize: `${fileValue}mb`,
      close: isChecked,
      tag: { isOpen: false, tagTitle: "Download", tagColor: "red" },
    });
    setInputValue("");
    setIsChecked("");
    setFileValue(Math.floor(Math.random() * 10));
  };

  return (
    <div className="absolute w-full h-full bg-white/30 backdrop-blur-md ">
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
        <div className="bg-white w-80 h-72 border border-slate-200 grid-cols-6 gap-5 resize-none rounded-xl px-5 py-5 flex flex-col shadow-lg text-sm">
          <h1 className="text-center text-slate-300 text-xl font-bold col-span-6">
            Notes.
          </h1>
          <textarea
            type="text"
            className="bg-slate-100 text-slate-600 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 outline-none rounded-lg p-2 duration-300 focus:border-slate-600 h-28"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter description"
          ></textarea>
          <div className="flex justify-between item-center">
            <lebal className="text-black text-xs">
              Download note.
              <span className="text-[10px] text-red-600/75">
                (with voice note is soon)
              </span>
            </lebal>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <button
              className="rounded-lg  relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500 overflow-hidden"
              onClick={handleAdd}
            >
              <span className="text-white font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                Add Item
              </span>
              <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                <svg
                  className="svg w-8 text-white"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" x2="12" y1="5" y2="19"></line>
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputdata;
