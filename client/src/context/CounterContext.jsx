import { createContext, useContext, useState } from "react";
import { createRequest, getDataRequest, getDataEeauRequest } from "../api/counter.js";

export const CounterContext = createContext();

export const useCounter = () => {

    const context = useContext(CounterContext)

    if (!context) {

        throw new Error("useCounter must be used within an CounterProvider");

    }

    return context;
}
export const CounterProvider = ({children}) => {
    
    const [errors, setErrors] = useState([]);
    const [Data, setData] = useState([]);
    const [contador, setContador] = useState([]);

    const createCounter = async (d) => {
        try {
            const res = await createRequest(d);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const getDataCounter = async () => {
        try {
            const res = await getDataRequest();
            setData([res.data]);
        } catch (error) {
            console.log(error);
        }
    }

    const getDataCounterEEAU = async () => {
        try {
            const res = await getDataEeauRequest();
            setContador(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CounterContext.Provider value={{
            createCounter,
            getDataCounter,
            getDataCounterEEAU,
            Data,
            contador,
            errors,
        }}>
            {children}
        </CounterContext.Provider>
    )
}