import React from 'react';
import Button from '@mui/material/Button';

const ButtonOutlined = ({ label, onClick, disabled }) => {
    return (
        <Button disabled={disabled} onClick={() => onClick} variant="outlined">{label}</Button>
    );
}

export default ButtonOutlined;