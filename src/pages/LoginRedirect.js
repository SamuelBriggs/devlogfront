import React, {useEffect} from 'react';

const LoginRedirect = () => {
    useEffect(() => {
        getCode();
    }, []); // Empty dependency array ensures the function is called only on mount

    const getCode = () => {
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const accessToken =  url.searchParams.get('code')
        console.log(accessToken)
        if (accessToken) localStorage.setItem('token', accessToken)
      //  window.location.href = "/dashboard";
    };

    //   return <div>Your Component Content</div>;
};

export default LoginRedirect;


