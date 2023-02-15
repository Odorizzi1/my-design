import React from 'react';
import Button from '@mui/material/Button';

const ButtonPrimary = ({ label, onClick }) => {
    return (
        <Button onClick={() => onClick} variant="contained">{label}</Button>
    );
}

export default ButtonPrimary;