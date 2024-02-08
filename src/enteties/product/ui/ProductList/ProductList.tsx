// react
import { FC, useState } from "react";
// styles
import styles from "./ProductList.module.scss";
//enteties
import { ProductCard } from "../ProductCard/ProductCard";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  wishlist: boolean;
}

interface ProductListProps {
  data: Product[];
}
export const ProductList: FC<ProductListProps> = ({ data }) => {
  const [products, setProducts] = useState(data);

  const handleHeartIconClick = (productId: number) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            wishlist: !product.wishlist,
          };
        }
        return product;
      });
    });
    console.log(products);
  };

  return (
    <ul className={styles.ProductList}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          wishlist={product.wishlist}
          onHeartIconClick={handleHeartIconClick}
        />
      ))}
    </ul>
  );
};
