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
              textValue={item.title}
              className={'border-b'}
              tabIndex={1}
            >
              <Link color="foreground" href={item.link} aria-current="page">
                {item.title}
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </NextUIProvider>
  );
}
