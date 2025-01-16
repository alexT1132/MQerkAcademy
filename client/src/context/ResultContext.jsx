import { createContext, useContext, useState } from "react";

export const ResultContext = createContext();

export const useResult = () => {
    const context = useContext(ResultContext)
    if (!context) {
        throw new Error("useResult must be used within an ResultProvider");
    }
    return context;
}

export const ResultProvider = ({children}) => {

    const [val, setVal] = useState(false);

    const Definicion = async (data) => {
        try {
            const res = data;
            if (res === 'Aceptado') {
                setVal(true);
              } else {
                setVal(false);
              }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <ResultContext.Provider value={{
            Definicion,
            val,
        }}>
            {children}
        </ResultContext.Provider>
    )
}
