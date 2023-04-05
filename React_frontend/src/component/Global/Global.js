import React, {useState} from 'react';

export const Context = React.createContext();

// Global State to be maintained...
// To give the PID for each user

const Global = ({children}) => {
    // PID has to be started with 1 not 0
    const [state, setState] = useState(1001);

    return(
        <Context.Provider value = {[state, setState]}>{children}</Context.Provider>
    );
}

export default Global;