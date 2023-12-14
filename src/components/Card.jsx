import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({
  desc,
  fileSize,
  close,
  tag,
  key,
  refrence,
  checked,
  onDelete,
}) => {
  const downloadFile = () => {
     const link = document.createElement("a");
     const content = desc;
     const file = new Blob([content], { type: 'text/plain' });
     link.href = URL.createObjectURL(file);
     link.download = "sample.txt";
     link.click();
     URL.revokeObjectURL(link.href);
  };
  return (
    <li key={key}>
      <motion.div
        drag
        dragConstraints={refrence}
        className={`relative w-60 h-72 rounded-[50px] ${
          checked ? "bg-zinc-900/90 text-white" : "bg-gray-100/75 text-black"
        } px-8 py-10 shrink-0 overflow-hidden anime`}
      >
        <div className="flex items-center justify-between gap-4">
          <FaRegFileAlt />
          <button
            className="flex justify-center items-center gap-2 w-12 h-6 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
            onClick={() => onDelete(key)}
          >
            <svg viewBox="0 0 15 15" className="w-4 fill-white">
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Button
            </svg>
          </button>
        </div>

        <p className="text-xs leading-tight mt-5">{desc}</p>
        <div className="foot absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between px-8 py-3 mb-3">
            <h5 className="text-sm">{fileSize}</h5>
            {!close ? (
              <IoIosClose size="1.5em" />
            ) : (
              <span className="w-5 h-5 bg-zinc-400 rounded-full flex items -center justify-center pt-[1px]">
                <MdOutlineFileDownload size="1em" color="#000" />
              </span>
            )}
          </div>
          {tag.isOpen && (
            <div
              className={`tag w-full py-3 ${
                tag.tagColor == "blue" ? "bg-blue-500" : "bg-green-500"
              } flex items-center justify-center text-white`}

              onClick={()=>downloadFile()}
            >
              <h3 className="font-semibold text-sm">{tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </li>
  );
};

export default Card;
