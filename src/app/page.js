// pages/index.js or any other component file
import React from 'react';
import Button from '../Atoms/Button';
import * as colors from '../utils/colors';
import EditSVG from '../utils/icons/EditSVG';
import ArrowLeftSVG from '../utils/icons/ArrowLeftSVG';


const HomePage = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '1vh'
    };

    return (
        <div style={containerStyle}>
            <Button
                label="Inscrijven"
                backgroundColor={colors.white}
                borderColor={colors.green}
                fontColor={colors.green}
                icon={<EditSVG/>}
                width="200px"
                height="50px"
                fontStyle="Inter"
                fontWeight="bold"
                fontSize='16px'
            />

            <Button
                label="Cancel"
                backgroundColor={colors.white}
                borderColor={colors.red}
                fontColor={colors.red}
                icon={null}
                width="150px"
                height="50px"
                fontStyle="Inter"
                fontWeight="bold"
                fontSize='16px'
            />

            <Button
                label=""
                backgroundColor={colors.green}
                borderColor={colors.green}
                fontColor={colors.white}
                icon={<ArrowLeftSVG/>}
                width="50px"
                height="50px"
                borderRadius={30}
            />

            <Button
                label="Save"
            />
        </div>
    );
};

export default HomePage;
