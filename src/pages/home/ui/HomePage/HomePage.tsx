// react
import {FC} from 'react'
// styles
import styles from './HomePage.module.scss'
import { Header } from '@/widgets/header/ui/Header/Header'
import { Menu } from '../Menu/Menu';
import { Carousel } from '@/widgets/carousel/ui/Carousel/Carousel';
//widgets
import images from "@/widgets/carousel/libs/assets/images.json";
import { ProductList } from '@/enteties/product/ui/ProductList/ProductList';
//products
import products from "@/enteties/product/ui/ProductList/products.json";
import { CustomCategoryTitle } from '@/shared/ui/CustomCategoryTitle/CustomCategoryTitle';

interface HomePageProps {

}
const categories = [
    {
      name: "Woman's Fashion",
      subcategories: ["Shoes", "Dresses", "Accessories"],
    },
    {
      name: "Men's Fashion",
      subcategories: ["Shoes", "Men's Accessories", "Coats"],
    },
    {
      name: "Electronics",
    },
    {
      name: "Home & Lifestyle",
    },
    {
      name: "Medicine",
    },
    {
      name: "Sports & Outdoor",
    },
    {
      name: "Baby's & Toys",
    },
    {
      name: "Groceries & Pets",
    },
    {
      name: "Health & Beauty",
    },
  ];

export const HomePage:FC<HomePageProps> = ({}) => {
return (
<div className={styles.HomePage}>
<Header/>
<div className={styles.HomePageContent}>
<Menu categories={categories} />
<Carousel images={images} />
<CustomCategoryTitle title="Our Products" />
<ProductList data={products} />
</div>

</div>
)
}
