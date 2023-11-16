import React from 'react';
import PropTypes from 'prop-types';
import Image from "next/image";
import logo from '../utils/images/logo.png';
import profilePic from '../utils/images/profilePicture.png';
import * as colors from '../utils/colors';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
// https://nextui.org/docs/components/dropdown

const Header = ({ profileName }) => {
    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1em',
        borderBottom: '1px solid #ddd',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
    };

    const headerItemsStyle = {
        margin: '0 0.625em'
    };

    const logoStyle = {
        marginRight: '1em',
    };

    const itemsStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: 20
    };

    const profileStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const profilePictureStyle = {
        borderRadius: '50%',
        width: '2.5em',
        height: '2.5em',
        marginRight: '0.625em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const itemTextStyle = {
        position: 'relative',
    };

    const itemBorderStyle = {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '2px',
        background: colors.green
    };

    return (
        <header style={headerStyle}>
            <div style={itemsStyle}>
                <Image src={logo} alt="Logo" width={100} height={100} style={logoStyle} />
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                        >
                            Open Menu
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">New file</DropdownItem>
                        <DropdownItem key="copy">Copy link</DropdownItem>
                        <DropdownItem key="edit">Edit file</DropdownItem>
                        <DropdownItem key="delete" className="text-danger" color="danger">
                            Delete file
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <div style={itemTextStyle}>
                    <p>Home</p>
                    <div style={itemBorderStyle}></div>
                </div>
                <div style={itemTextStyle}>
                    <p>Events</p>
                    <div style={itemBorderStyle}></div>
                </div>
                <div style={itemTextStyle}>
                    <p>Routes</p>
                    <div style={itemBorderStyle}></div>
                </div>
                <div style={itemTextStyle}>
                    <p>Dashboard</p>
                    <div style={itemBorderStyle}></div>
                </div>
            </div>

            <div style={profileStyle}>
                <div style={profilePictureStyle}>
                    <Image src={profilePic} alt="Logo" width={30} height={30} />
                </div>
                <p>{profileName}</p>
            </div>
        </header>
    );
};

Header.propTypes = {
    logo: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
    profilePicture: PropTypes.string.isRequired,
    profileName: PropTypes.string.isRequired,
};

export default Header;
