import React from "react";
import {
  NextUIProvider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import ArrowDownSVG from "@/utils/icons/ArrowDownSVG";

// https://nextui.org/docs/components/dropdown
const CustomDropdown = ({ buttonText, items }) => {
  const dropdownStyle = {
    border: "solid",
    padding: 0,
    maxWidth: 100,
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 0,
    border: "solid",
    padding: 0,
  };

  return (
    <NextUIProvider style={dropdownStyle}>
      {/*{<ArrowDownSVG />}*/}
      <Dropdown>
        <DropdownTrigger style={buttonStyle}>
          <Button variant="none">{buttonText}</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {items.map((item, index) => (
            <DropdownItem key={index}>{item}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </NextUIProvider>
  );
};

export default CustomDropdown;
