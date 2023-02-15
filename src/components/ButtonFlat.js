import React from 'react';

import Button from '@mui/material/Button';

const ButtonFlat = ({ label, onClick, disabled }) => {
    return (

        <Button disabled={disabled} onClick={() => onClick} variant="text"> {label}</Button>

    );
}

export default ButtonFlat;