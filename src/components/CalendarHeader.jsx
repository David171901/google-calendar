import dayjs from 'dayjs';
import React,{useContext} from 'react'
// ICONS
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
// CONTEXT
import GlobalContext from "../context/GlobalContext";

const CalendarHeader = () => {

  const {monthIndex, setMonthIndex} = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  }

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  }

  const handleReset= () => {
    setMonthIndex(monthIndex === dayjs().month() 
    ? monthIndex + Math.random()
    : dayjs().month());
  }

  return (
    <header className='px-4 py-2 flex items-center'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" alt="calendar" className='mr-2 w-12 h-12'/>
        <h1 className='mr-10 text-xl text-gray-500 font-bold'>
            Calendar
        </h1>
        <button className='border rounded py-2 px-4 mr-5' onClick={()=>handleReset()}>Today</button>
        <button onClick={()=>handlePrevMonth()}>
            <AiOutlineLeft className='cursor-pointer text-gray-600 mx-2'></AiOutlineLeft>
        </button>
        <button onClick={()=>handleNextMonth()}>
            <AiOutlineRight className='cursor-pointer text-gray-600 mx-2'></AiOutlineRight>
        </button>
        <h2 className='ml-4 text-gray-500 font-bold'>
          {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
        </h2>
    </header>
  )
}

export default CalendarHeader