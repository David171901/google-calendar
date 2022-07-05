import dayjs from 'dayjs';
import React, { useContext, useEffect } from 'react'
import { getMonth } from '../util';
// ICONS
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
// CONTEXT
import GlobalContext from '../context/ContextWrapper'

const SmallCalendar = () => {

    const [currentMonthIdx, setCurrentMonthIdx] = React.useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = React.useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx]);

    const {monthIndex,setSmallCalendarMonth,daySelected,setDaySelected} = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonthIdx(monthIndex);
    },[monthIndex]);

    const handlePrevMonth = () => {
        setCurrentMonthIdx(currentMonthIdx - 1);
    }

    const handleNextMonth = () => {
        setCurrentMonthIdx(currentMonthIdx + 1);
    }

    const getDayClass = (day) => {
        const format = "DD-MM-YY";
        const nowDay = dayjs().format(format);
        const currDay = day.format(format);
        const slcDay = daySelected && daySelected.format(format);
        if(nowDay === currDay){
            return "bg-blue-500 text-white rounded-full";
        } else if (currDay === slcDay){
            return "bg-blue-100 text-blue-600 rounded-full font-bold";
        } else{
            return ""
        }
    }

  return (
    <div className='mt-9'>
        <header className='flex justify-between'>
            <p className='text-gray-500 font-bold'>
                {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
            </p>
            <button onClick={handlePrevMonth}>
                <AiOutlineLeft className='cursor-pointer text-gray-600'></AiOutlineLeft>
            </button>
            <button onClick={handleNextMonth}>
                <AiOutlineRight className='cursor-pointer text-gray-600'></AiOutlineRight>
            </button>
        </header>
        <div className='grid grid-cols-7 grid-rows-6'>
            {currentMonth[0].map((day, i) => (
                <span key={i} className="text-sm py-1 text-center">
                    {day.format("dd").charAt(0)}
                </span>
            ))}
            {currentMonth.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setSmallCalendarMonth(currentMonthIdx);
                            setDaySelected(day);
                        }}
                        className={`py-1 w-full ${getDayClass(day)}`}
                    >
                        <span className='text-sm'>{day.format("D")}</span>
                    </button>
                    ))}
                </React.Fragment>
            ))}            
        </div>
    </div>
  )
}

export default SmallCalendar