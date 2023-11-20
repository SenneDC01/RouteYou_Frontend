import React from "react";
import {
  NextUIProvider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

// https://nextui.org/docs/components/dropdown
const CustomDropdown = ({ buttonText, items }) => {
  const dropdownStyle = {
    //border: "solid",
    padding: 0,
    maxWidth: 100,
    fontSize: "20"

  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 4,
    //border: "solid",
    padding: 0,
  };

  return (
    <NextUIProvider style={dropdownStyle}>
      {/*{<ArrowDownSVG />}*/}
      <Dropdown>
        <DropdownTrigger style={buttonStyle}>
          <Button variant="none" size={"lg"} className={"h-0 p-0 min-w-fit"}>{buttonText}</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {items.map((item, index) => (
            <DropdownItem key={index} textValue={item} className={"border-b"}>{item}</DropdownItem>
        ))}
        </DropdownMenu>
      </Dropdown>
    </NextUIProvider>
  );
};

export default CustomDropdown;
