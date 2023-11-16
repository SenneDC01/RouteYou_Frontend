// pages/index.js or any other component file
import React from 'react';
import CustomButton from '../atoms/Button';
import * as colors from '../utils/colors';
import EditSVG from '../utils/icons/EditSVG';
import ArrowLeftSVG from '../utils/icons/ArrowLeftSVG';
import Header from '../organisms/header';
import '../app/globals.css';

const HomePage = () => {
    const headerData = {
        profilePicture: '/path/to/profile-picture.jpg',
        profileName: 'John Doe',
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '1vh'
    };

    return (
        <div>
            <Header {...headerData} />
            <div style={containerStyle}>
                <CustomButton
                    label="Inscrijven"
                    backgroundColor={colors.white}
                    borderColor={colors.green}
                    fontColor={colors.green}
                    icon={<EditSVG/>}
                    width="15em"
                    height="3.5em"
                    fontStyle="Inter"
                    fontWeight="bold"
                    fontSize='1em'
                />

                <CustomButton
                    label="Cancel"
                    backgroundColor={colors.white}
                    borderColor={colors.red}
                    fontColor={colors.red}
                    icon={null}
                    width="12em"
                    height="3.5em"
                    fontStyle="Inter"
                    fontWeight="bold"
                    fontSize='1em'
                />

                <CustomButton
                    label=""
                    backgroundColor={colors.green}
                    borderColor={colors.green}
                    fontColor={colors.white}
                    icon={<ArrowLeftSVG/>}
                    width="3em"
                    height="3em"
                    borderRadius={30}
                />

                <CustomButton
                    label="Save"
                />
            </div>
        </div>
    );
};

export default HomePage;
