// styles
import styles from "./App.module.scss";
// assets
// import SearchIcon from "@/shared/libs/assets/svg/searchIcon.svg?react";
// import SendIcon from "@/shared/libs/assets/svg/sendIcon.svg?react";
// import CartIcon from "@/shared/libs/assets/svg/cartIcon.svg?react";
// import GoogleIcon from "@/shared/libs/assets/svg/googleIcon.svg?react";
// ui
// import { Button } from "@/shared/ui/Button";
// import { Input } from "@/shared/ui/Input";
import { CustomNumberInput } from "@/shared/ui/CustomNumberInput";

const App = () => {

  // const handleClick = () => {
  //   console.log("Button clicked!");
  // };
  // const handleInputChange = () => {
  //   console.log("handleInputChange");
  // };
  const handleInputChange = (value: number) => {
    console.log('Введене значення:', value);
  };

  return (
    <div className={styles.App}>
      {/* <Button onClick={handleClick} disabled={false} backgroundColor="rose" size="large">
        View All Products
      </Button>

      <Button onClick={handleClick} disabled={false} backgroundColor="green" size="large">
        Buy Now!
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

      <CustomNumberInput onChange={handleInputChange} />
    </div>
  );
};

export default App;
