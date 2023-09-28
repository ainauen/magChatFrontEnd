import {useMsal} from "@azure/msal-react";
import { loginApiRequest } from "../AuthConfig";
import { Button } from "react-bootstrap";

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginRedirect(loginApiRequest).catch((e) => {
            console.log(e);
        });
    };
    return <Button className="btn-warning btn-sm" onClick={handleLogin}>Sign In</Button>
};