// styles
import styles from "./App.module.scss";
// assets
import SearchIcon from "@/shared/libs/assets/svg/searchIcon.svg?react";
import searchIcon from "@/shared/libs/assets/icon-search.png";
import sendIcon from "@/shared/libs/assets/icon-send.png";
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
      <Button onClick={handleClick} disabled={false} backgroundColor="rose">
        View All Products
      </Button>

      <Button onClick={handleClick} disabled={false} backgroundColor="green">
        View All
      </Button>

      <Button onClick={handleClick} disabled={false} backgroundColor="none">
        Update Cart
      </Button>

      <Input
        placeholder="Confirm New Passwod"
        borderStyle="none"
        backgroundColor="gray"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperWidth="165px"
        inputWrapperHeight="19px"
      />

      <Input
        placeholder="Coupon Code"
        borderStyle="all"
        backgroundColor="none"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperWidth="150px"
        inputWrapperHeight="25px"
      />

      <Input
        placeholder="Email or Phone Number"
        borderStyle="bottom"
        backgroundColor="none"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperWidth="165px"
        inputWrapperHeight="20px"
      />

      <Input
        borderStyle="none"
        backgroundColor="gray"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperWidth="122px"
        inputWrapperHeight="20px"
      />

      <Input
        icon={<SearchIcon />}
        placeholder="What are you looking for?"
        borderStyle="none"
        backgroundColor="gray"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperWidth="130px"
        inputWrapperHeight="19px"
      />

      <Input
        icon={<img src={sendIcon} alt="Send Icon" />}
        placeholder="Enter your email"
        borderStyle="all"
        borderColor="#ffffff"
        backgroundColor="none"
        onChange={handleInputChange}
        inputType="text"
        inputWrapperWidth="130px"
        inputWrapperHeight="25px"
      />

      <NumberInput onChange={handleNumberInputChange} />
    </div>
  );
};

export default App;
