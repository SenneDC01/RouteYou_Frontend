// src/atoms/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import * as colors from '../utils/colors';

const Button = ({ label, backgroundColor, borderColor, fontColor, icon, width, height, fontStyle, fontWeight, fontSize }) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 3,
        borderRadius: 5,
        color: fontColor,
        width: width,
        height: height,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
        fontSize: fontSize
    };

    return (
        <button style={buttonStyle}>
            <img src={icon} width="200" height="20" />
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    fontColor: PropTypes.string,
    icon: PropTypes.element,
    width: PropTypes.string,
    height: PropTypes.string,
    fontStyle: PropTypes.string,
    fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fontSize: PropTypes.string
};

Button.defaultProps = {
    label: 'Click me',
    backgroundColor: colors.green,
    borderColor: colors.dark,
    fontColor: colors.white,
    icon: null,
    width: '100px',
    height: '50px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 'inherit'
};

export default Button;
