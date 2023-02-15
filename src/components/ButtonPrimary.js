import React from 'react';
import Button from '@mui/material/Button';

const ButtonPrimary = ({ label, onClick, disabled }) => {
    return (
        <Button disabled={disabled} onClick={() => onClick} variant="contained">{label}</Button>
    );
}

export default ButtonPrimary;