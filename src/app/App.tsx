// styles
import styles from "./App.module.scss";
//react
import { useState, useEffect } from "react";
// assets
// import SearchIcon from "@/shared/libs/assets/svg/searchIcon.svg?react";
// import SendIcon from "@/shared/libs/assets/svg/sendIcon.svg?react";
// import CartIcon from "@/shared/libs/assets/svg/cartIcon.svg?react";
import CartIconBlack from "@/shared/libs/assets/svg/cartIconBlack.svg?react";
// import HeartIcon from "@/shared/libs/assets/svg/heartIcon.svg?react";
// import GoogleIcon from "@/shared/libs/assets/svg/googleIcon.svg?react";
import InstagramIcon from "@/shared/libs/assets/svg/instagramIcon.svg?react";
// ui
// import { Button } from "@/shared/ui/Button";
// import { Input } from "@/shared/ui/Input";
// import { CustomNumberInput } from "@/shared/ui/CustomNumberInput";
// import { CustomCheckbox } from "@/shared/ui/CustomCheckbox";
// import { CustomRadioInput } from "@/shared/ui/CustomRadioInput";
// import { CustomCategoryTitle } from "@/shared/ui/CustomCategoryTitle";
// import { ProductList } from "@/enteties/product/ui/ProductList/ProductList";

// import images from "@/widgets/carousel/libs/assets/images.json";
// import products from "@/enteties/product/ui/ProductList/products.json";

// import { Carousel } from "@/widgets/carousel";
import { HomePage } from "@/pages/home";
import { UserProfileButton } from "@/enteties/user/ui/UserProfileButton/UserProfileButton";
import { LanguageSwitch } from "@/features/languageSwitch";
import { IconButton } from "@/shared/ui/IconButton/IconButton";
import { IconButtonWithCounter } from "@/shared/ui/IconButtonWithCounter/";
import { Header } from "@/widgets/header/ui/Header/Header";
import { ScrollToTopButton } from "@/features/scrollToTopButton";

// interface Category {
//   name: string;
//   subcategories?: string[];
// }

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

const App = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    "Bank"
  );

  // const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (selectedOption === undefined) {
      setSelectedOption("Bank");
    }
  }, [selectedOption]);

  const handleClick = () => {
    console.log("User Profile Button clicked!");
  };
  const handleClick2 = () => {
    console.log("Select clicked!");
  };
  // const handleRadioInputChange = (value: string) => {
  //   setSelectedOption(value);
  //   console.log(value);
  // };
  // const handleNumberInputChange = (value: number) => {
  //   console.log(value);
  // };
  // const handleCheckboxChange =(checked: boolean)=> {
  //   console.log(checked);
  // }
  // const handleInputChange = (value: string) => {
  //   setInputValue(value);
  //   console.log(value)
  //   console.log(inputValue)
  // };
  return (
    <div className={styles.App}>
      <HomePage />
      <ScrollToTopButton />
      {/* <Header/> */}
      {/* <IconButton icon={<InstagramIcon />} onClick={handleClick} /> */}
      {/* <IconButtonWithCounter icon={<CartIconBlack />} onClick={handleClick} counterNumber={4} /> */}
      {/* <UserProfileButton onClick={handleClick} /> */}
      {/* <LanguageSwitch onChange={handleClick2} /> */}
      {/* <Carousel images={images} /> */}
      {/* <Menu categories={categories} /> */}
      {/* <ProductList data={products} /> */}

      {/* <Button disabled={false} backgroundColor="green" size="large">
        Buy Now!
      </Button> */}

      {/* <Input
        placeholder="Coupon Code"
        borderStyle="all"
        backgroundColor="none"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperHeight="xl"
      />

      <CustomCategoryTitle title="Our Products" />
      <CustomCategoryTitle title="Featured" />
      <CustomCategoryTitle title="This Month" />


      <CustomNumberInput onChange={handleNumberInputChange} />
      <CustomCheckbox onChange={handleCheckboxChange} />

      <div>
        <CustomRadioInput onChange={handleRadioInputChange} value="Bank" checked={selectedOption === "Bank"} />
        <CustomRadioInput onChange={handleRadioInputChange} value="Cash on delivery" checked={selectedOption === "Cash on delivery"} />
      </div> */}
      {/* <Button onClick={handleClick} disabled={false} backgroundColor="rose" size="large">
        View All Products
      </Button>


      <Button onClick={handleClick} disabled={false} backgroundColor="none" size="large">
        Update Cart
      </Button>

      <Button onClick={handleClick} disabled={false} backgroundColor="black" size="small" icon={<CartIcon />}>
        Add To Cart
      </Button>

      <Button onClick={handleClick} disabled={false} backgroundColor="none" size="large" icon={<GoogleIcon />}>
        Sign up with Google
      </Button>

      <Button onClick={handleClick} disabled={false} backgroundColor="black" size="small">
        Add To Cart
      </Button>

      <Input
        placeholder="Confirm New Passwod"
        borderStyle="none"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperHeight="l"
      />

      <Input
        placeholder="Coupon Code"
        borderStyle="all"
        backgroundColor="none"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperHeight="xl"
      />
      

      <Input
        borderStyle="none"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperHeight="l"
      />

      <Input
        placeholder="Email or Phone Number"
        borderStyle="bottom"
        backgroundColor="none"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperHeight="xs"
      />

      <Input
        icon={<SendIcon />}
        placeholder="Enter your email"
        borderStyle="all"
        borderColor="white"
        backgroundColor="none"
        onChange={handleInputChange}
        inputType="email"
        inputWrapperHeight="m"
      />

      <Input
        icon={<SearchIcon />}
        placeholder="What are you looking for?"
        borderStyle="none"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperHeight="s"
      /> */}
    </div>
  );
};

export default App;
