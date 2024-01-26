// styles
import styles from "./App.module.scss";
//react
import { useState, useEffect } from "react";
// assets
// import SearchIcon from "@/shared/libs/assets/svg/searchIcon.svg?react";
// import SendIcon from "@/shared/libs/assets/svg/sendIcon.svg?react";
// import CartIcon from "@/shared/libs/assets/svg/cartIcon.svg?react";
// import GoogleIcon from "@/shared/libs/assets/svg/googleIcon.svg?react";
// ui
// import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { CustomNumberInput } from "@/shared/ui/CustomNumberInput";
import { CustomCheckbox } from "@/shared/ui/CustomCheckbox";
import { CustomRadioInput } from "@/shared/ui/CustomRadioInput";
import { CustomCategoryTitle } from "@/shared/ui/CustomCategoryTitle";

const App = () => {

  const [selectedOption, setSelectedOption] = useState<string | undefined>("Bank");

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (selectedOption === undefined) {
      setSelectedOption("Bank");
    }
  }, [selectedOption]);

  // const handleClick = () => {
  //   console.log("Button clicked!");
  // };
  const handleRadioInputChange = (value: string) => {
    setSelectedOption(value);
    console.log(value);
  };
  const handleNumberInputChange = (value: number) => {
    console.log(value);
  };
  const handleCheckboxChange =(checked: boolean)=> {
    console.log(checked);
  }
  const handleInputChange = (value: string) => {
    setInputValue(value);
    console.log(value)
    console.log(inputValue)
  };
  return (
    <div className={styles.App}>
      <Input
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
      </div>
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

    </div>

  );
};

export default App;
