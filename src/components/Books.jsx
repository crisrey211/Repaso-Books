/* eslint-disable react/prop-types */
import Card from './Card';

function Books({ products }) {
    return (
        <div>
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
