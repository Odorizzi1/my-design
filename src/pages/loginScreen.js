import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import BasicButtons from "../components/ButtonFlat";
import ButtonOutlined from "../components/ButtonOutlined";
import ButtonFlat from "../components/ButtonFlat";

const LoginScreen = () => {
    return (
        <div>
            <ButtonPrimary
                label="Primary Button"
            />
            <ButtonOutlined />

            <ButtonFlat />
        </div>
    )
}

export default LoginScreen;