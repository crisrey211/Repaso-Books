import React from "react"
import "../css/filters.css"

function Filters() {
    return (
        <React.Fragment>
            <div className="filters">
                <div className="range">
                    <input type="range" name="" value="0" min="0" max="1000" />
                </div >
                <div>
                    <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option selected>Selecciona un género</option>
                        <option value="all">Todas</option>
                        <option value="Terror">Terror</option>
                        <option value="Ciencia ficción">Ciencia ficción</option>
                        <option value="Zombies">Zombies</option>
                        <option value="Fantasía">Fantasía</option>
                    </select>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Filters
