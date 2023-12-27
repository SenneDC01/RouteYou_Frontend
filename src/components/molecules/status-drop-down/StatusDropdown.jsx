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

const statusOptions = [
  {
    key: 'interested',
    label: 'Interested',
    icon: <StarSVG width={20} height={20} fill={'#1a614a'} />,
  },
  {
    key: 'signedUp',
    label: 'Signed Up',
    icon: <SignedUpSVG width={20} height={20} />,
  },
  {
    key: 'canceled',
    label: 'Canceled',
    icon: <CancelledSVG width={20} height={20} />,
  },
];

const Participants = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(['interested'])
  );

  const selectedOption = statusOptions.find(
    (option) => option.key === selectedKeys.values().next().value
  );

  return (
    <Dropdown>
      <DropdownTrigger className="w-40">
        <Button variant="bordered" className="border-2 rounded">
          <div className="flex items-center">
            {selectedOption && selectedOption.icon}
            <span className="ml-2 flex items-center gap-6">
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
          <DropdownItem key={option.key} className="flex items-center">
            <div className="flex">
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Participants;
