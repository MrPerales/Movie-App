import React, { useState } from "react";

const Context =React.createContext();

function ContextProvider({children}){
    // States
    const [loading,setLoading]=useState(true);

    return(
        <Context.Provider
            value={{
                // Share states
                loading,
                setLoading,
            }}
        >
            {children}
        </Context.Provider>
    )





}

export {Context,ContextProvider}