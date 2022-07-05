import GlobalContext from "./ContextWrapper";
import dayjs from "dayjs";
import { useState } from "react";

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());

    return (
        <GlobalContext.Provider 
            value={{ 
                monthIndex, 
                setMonthIndex, 
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default ContextWrapper