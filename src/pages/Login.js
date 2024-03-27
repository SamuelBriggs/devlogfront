import React from "react";
import {GoogleAuthLogin} from "./ApiCall";

function Login(){

    return(

    <button
        onClick={GoogleAuthLogin}
    >Login With Google</button>
    )










}
export default Login;
