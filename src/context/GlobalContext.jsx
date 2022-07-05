import GlobalContext from "./ContextWrapper";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);

    useEffect(() => {
        if(smallCalendarMonth !== null){
            setMonthIndex(smallCalendarMonth);
        }
    },[smallCalendarMonth])

    return (
        <GlobalContext.Provider 
            value={{ 
                monthIndex, 
                setMonthIndex,
                smallCalendarMonth,
                setSmallCalendarMonth,
                daySelected,
                setDaySelected,
                showEventModal,
                setShowEventModal, 
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default ContextWrapper