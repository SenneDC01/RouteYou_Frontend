// pages/index.js or any other component file
import React from 'react';
import Button from '../Atoms/Button';
import * as colors from '../utils/colors';

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
                label="Click me"
                backgroundColor={colors.green}
                borderColor={colors.green}
                fontColor={colors.white}
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
