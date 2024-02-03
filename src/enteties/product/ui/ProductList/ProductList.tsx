// react
import { FC, useState } from 'react'
// styles
import styles from './ProductList.module.scss'
//enteties
import { ProductCard } from "../ProductCard/ProductCard";
import productsList from "../ProductCard/products.json";

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    wishlist: boolean;
}

interface ProductListProps {
    products: Product[];
}
export const ProductList: FC<ProductListProps> = ({ }) => {

    const [products, setProducts] = useState(productsList);

    const handleHeartIconClick = (productId: number) => {
        setProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.id === productId) {
                    return {
                        ...product,
                        wishlist: !product.wishlist
                    };
                }
                return product;
            });
        });
        console.log(products)
    };
    
    return (
        <ul className={styles.ProductList}>
            {products.map(product => (
                <ProductCard
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    wishlist={product.wishlist}
                    onHeartIconClick={handleHeartIconClick} />
            ))}
        </ul>
    )
}
