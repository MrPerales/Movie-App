import React from "react";

const Context =React.createContext();

function ContextProvider({children}){
    // States


    return(
        <Context.Provider
            value={{
                // Share states
            }}
        >
            {children}
        </Context.Provider>
    )





}

export {Context,ContextProvider}