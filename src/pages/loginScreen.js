import React from "react";
import NavBar from "../components/NavBar";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonOutlined from "../components/ButtonOutlined";
import ButtonFlat from "../components/ButtonFlat";
import { TextField } from "@mui/material";
import BasicTextFields from "../components/TextField";

const LoginScreen = () => {
    return (
        <div>
            <NavBar />
            <div>
                <ButtonPrimary
                    label="Primary Button"
                />
                <ButtonOutlined
                    label="Button Outlined"
                />

                <ButtonFlat
                    label="Button Flat"
                />
                <BasicTextFields />


            </div>

        </div>

    )
}

export default LoginScreen;