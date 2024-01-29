/* eslint-disable react/prop-types */
import "../css/card.css"
import { useCart } from "../hooks/useCart"

function Card({ title,
    pages,
    genre,
    cover,
    synopsis,
    author, item }) {

    const { addToCart, cart } = useCart()

    return (
        <div>
            <div className="card-container">
                <img className="hero-image" src={cover} alt="Spinning glass cube" />
                <main className="main-content">
                    <h1>
                        <button onClick={() => addToCart({ title })}>{title}</button>
                    </h1>
                    <div className="genre">
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            {genre}
                        </span>
                    </div>
                    <p>{synopsis}</p>
                    <div className="flex-row">
                        <div className="coin-base">
                            <img src="https://i.postimg.cc/T1F1K0bW/Ethereum.png" alt="Ethereum" className="small-image" />
                            <h2>{author.name}</h2>
                        </div>
                        <div className="time-left">
                            <img src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png" alt="clock" className="small-image" />
                            <p>{pages}</p>
                        </div>
                    </div>
                </main>

            </div>
        </div>


    )
}

export default Card