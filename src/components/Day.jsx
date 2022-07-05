import dayjs from 'dayjs'
import React,{useContext} from 'react'
import GlobalContext from '../context/ContextWrapper'

const Day = ({ day,rowIdx }) => {

    const {monthIndex,setDaySelected,setShowEventModal} = useContext(GlobalContext);

    const getCurrentDayClass = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
        ? 'bg-blue-600 text-white rounded-full w-7'
        : ''
    }

    const getLastDaysClass = () => {
        return ((monthIndex-1)%12) === day.month()
        ? 'text-gray-500'
        : ''
    }

  return (
    <div className='border border-gray-200 flex flex-col'
    onClick={()=>{
        setDaySelected(day);
        setShowEventModal(true);
    }}>
        <header className='flex flex-col items-center'>
            {rowIdx === 0 && (
                <p className='text-sm mt-1'>{day.format("ddd").toUpperCase()}</p>
            )}
            <p className={`text-sm p-1 my-1 text-center ${getLastDaysClass()} ${getCurrentDayClass()}`}>
                {day.format("DD")}
            </p>
        </header>
    </div>
  )
}

export default Day