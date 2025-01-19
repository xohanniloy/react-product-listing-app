// import React from 'react';

const Product = (props) => {
  const { product } = props;
  const { image, title, description, category, price, rating, button } =
    product;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="product">
        <img src={image} alt={title} />
        <div className="product-info">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>
            Category: <span>{category}</span>
          </p>
          <p>
            Price: <span>${price}</span>
          </p>
          <p>
            Rating: <span>{rating.rate}</span>(<span>{rating.count}</span>)
          </p>
          <button className="btn btn-primary">{button}</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
