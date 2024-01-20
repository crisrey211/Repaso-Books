import React from "react"
import "../css/filters.css"

function Filters({ onChange, filters }) {
    /* const [maxPage, setMaxPage] = React.useState(0)
    const [genre, setGenre] = React.useState("all") */

    const handleRange = (event) => {
        onChange((prevState) => ({ ...prevState, maxPage: event.target.value }))
    }

    const handleGenre = (event) => {
        onChange((prevState) => ({ ...prevState, category: event.target.value }))
    }

    return (
        <React.Fragment>
            <div className="filters">
                <h1>Filtros</h1>
                <div className="range">
                    <input id="price" type="range" name="page" min="0" max="1500" onChange={handleRange} />
                    <label htmlFor="price">De {filters.maxPage} pag max.</label>
                </div >
                <div>
                    <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleGenre}
                    >
                        <option >Selecciona un género</option>
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
