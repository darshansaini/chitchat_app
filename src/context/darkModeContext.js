import { createContext, useReducer } from "react";
const INITIAL_STATE = {
    darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

const DarkModeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE": {
            return {
                darkMode: !state.darkMode,
            };
        }
        default:
            return state;
    }
};

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
    return (
        <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    );
};