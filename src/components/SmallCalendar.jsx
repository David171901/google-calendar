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

    const {monthIndex} = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonthIdx(monthIndex);
    },[monthIndex]);

    const handlePrevMonth = () => {
        setCurrentMonthIdx(currentMonthIdx - 1);
    }

    const handleNextMonth = () => {
        setCurrentMonthIdx(currentMonthIdx + 1);
    }

    const getCurrentDayClass = (day) => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
        ? 'bg-blue-600 text-white rounded-full w-7'
        : ''
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
                        className={`py-1 w-full ${getCurrentDayClass(day)}`}
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