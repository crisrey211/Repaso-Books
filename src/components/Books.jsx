/* eslint-disable react/prop-types */
import Card from './Card';
import "../css/books.css"

function Books({ products }) {
    return (
        <div className='list'>
            {products.map((item) => (
                <Card
                    key={item.id}
                    title={item.title}
                    pages={item.pages}
                    genre={item.genre}
                    cover={item.cover}
                    synopsis={item.synopsis}
                    year={item.year}
                    id={item.id}
                    author={item.author}
                />
            ))}
        </div>
    );
}

export default Books;
