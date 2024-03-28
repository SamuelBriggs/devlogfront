import React, {useEffect} from 'react';
import {LoginUser} from "./ApiCall";

const LoginRedirect = () => {
    useEffect(() => {
        getCode();
    }, []); // Empty dependency array ensures the function is called only on mount

    const getCode = () => {
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const code =  url.searchParams.get('code')
        console.log(code)
        if (code) localStorage.setItem('token', code)
        const response = LoginUser(code)
        console.log(response)

      //  window.location.href = "/dashboard";
    };

    //   return <div>Your Component Content</div>;
};

export default LoginRedirect;


