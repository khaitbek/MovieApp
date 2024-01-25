import { createContext, useEffect, useState } from "react";

export const ActorContext = createContext();

export const ActorContextProvider = ({children}) => {
    const [actor, setActor] = useState({});
    return <ActorContext.Provider value={{ actor, setActor }}>
        {children}
    </ActorContext.Provider>
}