import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { useEffect, useState, useReducer } from "react";

function savedEventsReducer(state, {type, payload}) {
    switch(type){
        case "PUSH":
            console.log('PUSH')
            return [...state, payload]
        case "UPDATE":
            return state.map(evt => evt.id === payload.id ? payload : evt)
        case "DELETE":
            return state.filter(evt => evt.id !== payload.id)
        default:
            return state
    }
}

function initEvents() {
    const storageEvents = localStorage.getItem("savedEvents");
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
}

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);

    const [savedEvents,dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents);

    useEffect(() => {
        localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    }, [savedEvents]);

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
                dispatchCalEvent,
                savedEvents,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default ContextWrapper