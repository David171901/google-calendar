import React, { useState,useContext } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineClose,AiOutlineClockCircle,AiOutlineCheck } from "react-icons/ai";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import {BiColorFill} from "react-icons/bi";
// CONTEXT
import GlobalContext from "../context/GlobalContext";

const labelsClasses = [
  "react-red",
  "react-green",
  "react-blue",
  "react-yellow",
  "react-purple",
  "react-cyan",
];

const EventModal = () => {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const [selectedLabel, setSelectedLabel] = useState(labelsClasses[0]);

    const { setShowEventModal,daySelected,dispatchCalEvent } = useContext(GlobalContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      const calendarEvent = {
        title,
        description,
        label: selectedLabel,
        day: daySelected.valueOf(),
        id: Date.now(),
      };
      dispatchCalEvent({ type: "PUSH", payload: calendarEvent });
      setShowEventModal(false);
    }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <VscThreeBars className="text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700"></VscThreeBars>
          <AiOutlineClose
            className="text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700"
            onClick={() => setShowEventModal(false)}
          ></AiOutlineClose>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input 
            type="text" 
            name="title" 
            placeholder="Add title" 
            value={title}
            required
            className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            onChange={e=>setTitle(e.target.value)} />
          </div>
          <div className="flex">
            <AiOutlineClockCircle/>
            <p>{daySelected.format("dddd,MMMM DD")}</p>
          </div>
          <div className="flex">
            <RiBarChartHorizontalLine/>
            <input type="text"
            name="description"
            placeholder="Add a description"
            value={description}
            className="pt-3 border-0 text-gray-600 font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            onChange={e=>setDescription(e.target.value)} />
          </div>
          <div className="flex">
            <BiColorFill/>
            <div className="flex gap-x-2">
            {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && <AiOutlineCheck></AiOutlineCheck>}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
