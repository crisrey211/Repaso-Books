/* eslint-disable react/prop-types */
import "../css/card.css"

function Card({ title,
    pages,
    genre,
    cover,
    synopsis,
    year,
    id,
    author }) {
    return (
        <div>
            <div className="card-container">
                <a href="/" className="hero-image-container">
                    <img className="hero-image" src={cover} alt="Spinning glass cube" />
                </a>
                <main className="main-content">
                    <h1><a href="#">{title}</a></h1>
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