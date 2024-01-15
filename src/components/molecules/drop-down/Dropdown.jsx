import React, { useState, useRef } from 'react';
import {
  NextUIProvider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

export default function CustomDropdown({ buttonText, items }) {
  const dropdownStyle = {
    padding: 0,
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 4,
    padding: 0,
    borderRadius: 0,
  };

  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();

      const itemCount = items.length;

      if (event.shiftKey) {
        setFocusedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : itemCount - 1
        );
      } else {
        setFocusedIndex((prevIndex) =>
          prevIndex < itemCount - 1 ? prevIndex + 1 : 0
        );
      }
    } else if (event.key === 'Enter') {
      const selectedItem = items[focusedIndex];
      if (selectedItem) {
        window.location.href = selectedItem.link;
      }
    }
  };

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  return (
    <NextUIProvider style={dropdownStyle}>
      <Dropdown ref={dropdownRef}>
        <DropdownTrigger style={buttonStyle}>
          <Button
            variant="none"
            size={'lg'}
            className={'h-6 p-0 min-w-fit'}
            tabIndex={0}
          >
            {buttonText}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions" onKeyDown={handleKeyDown}>
          {items.map((item, index) => (
            <DropdownItem
              key={index}
              textValue={item.title}
              className={'border-b'}
              tabIndex={index === focusedIndex ? 0 : -1}
              onFocus={() => handleFocus(index)}
              onBlur={() => handleFocus(-1)}
              href={item.link}
            >
              {item.title}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </NextUIProvider>
  );
}
