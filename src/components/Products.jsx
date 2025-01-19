import Product from "./Product";

const Products = (props) => {
  const { products } = props;

  return (
    <div>
      <div className="products">
        <div className="row">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
