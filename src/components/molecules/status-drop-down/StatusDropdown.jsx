import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import StarSVG from '@/utils/icons/StarSVG';
import CancelledSVG from '@/utils/icons/CancelledSVG';
import SignedUpSVG from '@/utils/icons/SignedUpSVG';
import SmallArrowDownSVG from '@/utils/icons/SmallArrowDownSVG';
import KlokSVG from '@/utils/icons/KlokSVG';

const statusOptions = [
  {
    key: 'SIGNED_UP',
    label: 'Signed Up',
    icon: <SignedUpSVG width={20} height={20} />,
  },
  {
    key: 'PRESENT',
    label: 'Present',
    icon: <SignedUpSVG width={20} height={20} />,
  },
  {
    key: 'INTERESTED',
    label: 'Interested',
    icon: <StarSVG width={20} height={20} fill={'#1a614a'} />,
  },
  {
    key: 'INVITED',
    label: 'Invited',
    icon: <KlokSVG width={20} height={20} />,
  },
];

export default function StatusDropdown({ status }) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([status]));

  const selectedOption = statusOptions.find(
    (option) => option.key === selectedKeys.values().next().value
  );

  return (
    <Dropdown>
      <DropdownTrigger className="w-40">
        <Button variant="bordered" className="border-2 rounded">
          <div className="flex items-center w-full">
            {selectedOption && selectedOption.icon}
            <span className="ml-2 flex items-center justify-between w-full">
              {selectedOption ? selectedOption.label : ''}
              <SmallArrowDownSVG width={10} height={10} />
            </span>
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {statusOptions.map((option) => (
          <DropdownItem
            key={option.key}
            textValue={option.label}
            className="flex items-center"
          >
            <div className="flex">
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
