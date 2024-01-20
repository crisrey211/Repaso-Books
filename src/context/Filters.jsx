import React, { Children, useState } from "react";

//1º crear el contexto
export const FilterContext = React.createContext()

//2º crear el provider
export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        category: "all",
        maxPage: "1500"
    })

    return (<FilterContext.Provider value={{
        filters, setFilters
    }}>
        {children}
    </FilterContext.Provider>)
}