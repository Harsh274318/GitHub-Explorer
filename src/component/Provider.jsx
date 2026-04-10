import React, { useState } from "react";
import Context from "./Context";
const Provider = ({ children }) => {
    const [state, setState] = useState({ data: [], error: "", loading: false, selectedUser: null })

    return (<>
        <Context.Provider value={{ state, setState }}>
            {children}
        </Context.Provider>

    </>)

}
export default Provider