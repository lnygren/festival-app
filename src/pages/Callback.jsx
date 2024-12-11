import { useEffect, useState } from 'react';

import {exchangeCodeForTokens, parseJwt, getUserInfo} from "../utils/login";
import {useDispatch, useSelector} from "react-redux";
import { setAuthenticated} from '../store/authenticationSlice'


function CallbackPage() {

    const [tokens, setTokens] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const handleAuthorizationCode = async () => {

            console.log();
            const params = new URLSearchParams(window.location.search);

            if (params.get("code")) {
                const authorizationCode = params.get("code");
                console.log("Received code: " + authorizationCode);

                try {

                    const tokenData = await exchangeCodeForTokens(authorizationCode);
                    console.log("Received tokens: ", tokenData);

                    setTokens(tokenData);

                    // Lagre tokens i localStorage
                    localStorage.setItem("access_token", tokenData.access_token);
                    localStorage.setItem("id_token", tokenData.id_token);
                    localStorage.setItem("refresh_token", tokenData.refresh_token);

                    // Hent brukerinfo
                    const userData = getUserInfo(tokenData.access_token);
                    console.log("User info: ", userData);
                    //setUserInfo(userData);

                    dispatch(setAuthenticated(true));
                } catch (error) {
                    console.error("Error exchanging code for tokens: ", error);
                }
            }
        };

        handleAuthorizationCode();
    }, []);

    if (!tokens) {
        return <div>Processing login...</div>;
    }

    /*const params = new URLSearchParams(window.location.search);

    console.log("Params: " + params);
        */
    

    

    return <div><h3>Du er nå logget inn.</h3></div>;
}

export default CallbackPage;