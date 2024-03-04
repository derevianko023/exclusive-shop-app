// react
import { FC } from 'react'
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
import { CategoryList } from '../CategoryList/CategoryList';
import { CustomTitle } from '@/shared/ui/CustomTitle/CustomTitle';
import { Button } from '@/shared/ui/Button/Button';
//ui
import { ServiceList } from '@/shared/ui/ServiceList/ServiceList';

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

export const HomePage: FC<HomePageProps> = ({ }) => {
  const handleClick = () => {
    console.log("View All Products")

  }
  return (
    <div className={styles.HomePage}>
      <Header />
      <div className={styles.HomePageContent}>
        <Menu categories={categories} />
        <Carousel images={images} />

        <div className={styles.CategoryWrapper}>
          <div className={styles.TitlesWrapper}>
            <CustomCategoryTitle title="Categories" />
            <CustomTitle title="Browse By Category" />
          </div>
          <CategoryList />
        </div>

        <div className={styles.ProductWrapper}>
          <div className={styles.TitlesWrapper}>
            <CustomCategoryTitle title="Our Products" />
            <CustomTitle title="Explore Our Products" />
          </div>
          <ProductList data={products} />
          <Button
            onClick={handleClick}
            disabled={false}
            backgroundColor="rose"
            size="large">
            View All Products
          </Button>
        </div>

        <div className={styles.ServicesWrapper}>
          <ServiceList />
        </div>
      </div>
    </div>
  )
}
