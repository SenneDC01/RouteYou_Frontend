import React from 'react';
import {
  NextUIProvider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
} from '@nextui-org/react';

const CustomDropdown = ({ buttonText, items }) => {
  const dropdownStyle = {
    padding: 0,
    maxWidth: 100,
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 4,
    padding: 0,
    borderRadius: 0,
  };

  return (
    <NextUIProvider style={dropdownStyle}>
      <Dropdown>
        <DropdownTrigger style={buttonStyle}>
          <Button variant="none" size={'lg'} className={'h-6 p-0 min-w-fit'}>
            {buttonText}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {items.map((item, index) => (
            <DropdownItem
              key={index}
              textValue={item}
              className={'border-b'}
              tabIndex={1}
            >
              <Link color="foreground" href="/events" aria-current="page">
                {item}
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </NextUIProvider>
  );
};

export default CustomDropdown;
