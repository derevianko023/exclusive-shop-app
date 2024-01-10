// styles
import styles from "./App.module.scss";
// assets
import SearchIcon from "@/shared/libs/assets/svg/searchIcon.svg?react";
import SendIcon from "@/shared/libs/assets/svg/sendIcon.svg?react";
import CartIcon from "@/shared/libs/assets/svg/cartIcon.svg?react";
import GoogleIcon from "@/shared/libs/assets/svg/googleIcon.svg?react";
// ui
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { NumberInput } from "@/shared/ui/NumberInput";

const App = () => {

  const handleClick = () => {
    console.log("Button clicked!");
  };
  const handleInputChange = () => {
    console.log("handleInputChange");
  };

  const handleNumberInputChange = () => {
    console.log("handleNumberInputChange");
  };

  return (
    <div className={styles.App}>
      <Button onClick={handleClick} disabled={false} backgroundColor="rose" size="large">
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
        backgroundColor="gray"
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
        placeholder="Email or Phone Number"
        borderStyle="bottom"
        backgroundColor="none"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperHeight="xs"
      />

      <Input
        borderStyle="none"
        backgroundColor="gray"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperHeight="l"
      />

      <Input
        icon={<SearchIcon />}
        placeholder="What are you looking for?"
        borderStyle="none"
        backgroundColor="gray"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperHeight="s"
      />

      <Input
        icon={<SendIcon />}
        placeholder="Enter your email"
        borderStyle="all"
        borderColor="white"
        backgroundColor="none"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperHeight="m"
      />

      <NumberInput onChange={handleNumberInputChange} />
    </div>
  );
};

export default App;
