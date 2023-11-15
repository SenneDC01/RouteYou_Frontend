// pages/index.js or any other component file
import React from 'react';
import Button from '../Atoms/Button';
import * as colors from '../utils/colors';
import * as icons from '../utils/icons/Edit.svg';
import Icons from "@/utils/icons/Edit.svg";

const HomePage = () => {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    };

    return (
        <div style={containerStyle}>
            <Button
                label="Inscrijven"
                backgroundColor={colors.white}
                borderColor={colors.green}
                fontColor={colors.dark}
                icon='../utils/icons/Edit.svg' // component maken van svg
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
        </div>
    );
};

export default HomePage;
