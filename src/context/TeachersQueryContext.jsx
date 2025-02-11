import { createContext, useState } from "react";

export const TeachersQueryContext = createContext();

export default function TeachersQueryProvider({ children }) {

    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(0);
    const [minNumber, setMinNumber] = useState(0);
    const [maxNumber, setMaxNumber] = useState(0);

    const [title, setTitle] = useState('');

    return (
        <TeachersQueryContext.Provider 
        value={{
            minNumber, setMinNumber,
            maxNumber, setMaxNumber,
            minRating, setMinRating, 
            maxRating, setMaxRating,
            title, setTitle,
        }}
        >{children}</TeachersQueryContext.Provider> 
    );
};
