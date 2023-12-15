import React, { useRef, useState } from "react";
import Card from "./Card";
import Inputdata from "./Inputdata";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { useEffect } from "react";

const Foreground = ({ bgChange }) => {
  const ref = useRef(null);

  const [checked, setChecked] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? false
      : true,
  );
  function handleChange(e) {
    setChecked(e.target.checked);
  }
  useEffect(()=>{
    bgChange(checked);
  })

  const [data, setData] = useState([
    {
      desc: "Exapmle notes or daily task with voice notes but voice notes feature is comming soon. The next two card are with dummy text.",
      fileSize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "blue" },
    },
    {
      desc: "Best thing is the all cards are dragable, select a card and darg where you want.",
      fileSize: ".5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fileSize: "1mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    },
  ]);

  const handleAddData = (newData) => {
    setData([...data, newData]);
  };

  const [showInputData, setShowInputData] = useState(false);
  const handleToggleInput = () => {
    setShowInputData(!showInputData);
  };

  const deleteHandler = (e) => {
    const newData = data.filter((_, i) => i !== e);
    setData(newData);
  };
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 overflow-y-scroll"
    >
      <div className="checkbox-wrapper-3 m-10">
        <input
          type="checkbox"
          value={checked}
          id="cbx-3"
          onChange={handleChange}
        />
        <label for="cbx-3" className="toggle">
          <span></span>
        </label>
      </div>
      <ul className="flex gap-5 flex-wrap">
        {data.map((item, index) => (
          <Card
            refrence={ref}
            desc={item.desc}
            fileSize={item.fileSize}
            close={item.close}
            tag={item.tag}
            key={index}
            checked={checked}
            onDelete={() => deleteHandler(index)}
          />
        ))}
      </ul>
      {showInputData && <Inputdata handleAddData={handleAddData} />}

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9, rotate: 130 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={handleToggleInput}
        className=" absolute top-[75%] left-[75%] w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center"
      >
        {showInputData ? <MdClose size="2em" /> : <FaPlus size="1.8em" />}
      </motion.button>
    </div>
  );
};

export default Foreground;
