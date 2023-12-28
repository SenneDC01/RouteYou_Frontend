import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import SmallArrowDownSVG from '@/utils/icons/SmallArrowDownSVG';

const sortOptions = [
  { key: 'name', label: 'Name' },
  { key: 'date', label: 'Date' },
];

const SortDropdown = ({ onSortChange }) => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['name']));

  const selectedOption = sortOptions.find(
    (option) => option.key === selectedKeys.values().next().value
  );

  const handleSortChange = (key) => {
    setSelectedKeys(new Set([key]));
    onSortChange(key);
  };

  return (
    <Dropdown className="min-w-0">
      <DropdownTrigger className="w-24">
        <Button variant="bordered" className="border-2 rounded">
          <span className="flex items-center gap-4">
            {selectedOption ? selectedOption.label : ''}
            <SmallArrowDownSVG width={10} height={10} />
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) =>
          handleSortChange(keys.values().next().value)
        }
        className="w-24"
      >
        {sortOptions.map((option) => (
          <DropdownItem
            key={option.key}
            className="flex items-center"
            textValue={option.label}
          >
            <span className="ml-2">{option.label}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SortDropdown;
