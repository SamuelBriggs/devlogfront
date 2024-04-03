import React, {useEffect} from 'react';
import {getUserId, LoginUser} from "./ApiCall";
import async from "async";

const LoginRedirect = () => {
    // useEffect(() => {
    //     getCode();
    // }, []); // Empty dependency array ensures the function is called only on mount

    const getCode = () => {
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const code =  url.searchParams.get('code')
        LoginUser(code)
        let toks = localStorage.getItem('token')
        const userResponse = getUserId(toks)
        console.log(userResponse)



      //  window.location.href = "/dashboard";
    };


       return <div>

           <button onClick={getCode}>click here</button>

       </div>;
};

export default LoginRedirect;


