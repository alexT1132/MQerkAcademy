import { createContext, useContext, useState } from "react";
import { createRequest, getDataRequest } from "../api/eeau.js";

export const EeauContext = createContext();

export const useEeau = () => {

    const context = useContext(EeauContext)

    if (!context) {
        throw new Error("useEeau must be used within an EeauProvider");
    }

    return context;
}

export const EeauProvider = ({children}) => {
    const [errors, setErrors] = useState([]);
    const [acceso, setAcceso] = useState(false);
    const [foto, setFoto] = useState(null)
    const [userData, setUserData] = useState([]);

    const createEEAU = async (data) => {
        try {
            const res = await createRequest(data);
            console.log(res);
            setAcceso(true);
        } catch (error) {
            setErrors(error);
        }
    }

    const createFoto = async (foto) => {
        try {
            const res = await foto;
            setFoto(res);
        } catch (error) {
            setErrors(error);
        }
    }

    const getData = async () => {
        try {
            const res = await getDataRequest();
            setUserData(res.data);
            // console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <EeauContext.Provider value={{
            createEEAU,
            getData,
            createFoto,
            acceso,
            userData,
            foto,
            errors
        }}>
            {children}
        </EeauContext.Provider>
    )
}