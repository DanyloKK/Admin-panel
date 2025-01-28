const ArticleProduct = () => {
    const products = [
        {
            id: 1,
            price: "20000$",
            quantity: 100,
            name: "Lenovo",
            image: "https://via.placeholder.com/150" // Добавил изображение для примера
        }
    ];

    return (
        <div>
            {products.map((product) => (
                <article key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                </article>
            ))}
        </div>
    );
};

export default ArticleProduct;