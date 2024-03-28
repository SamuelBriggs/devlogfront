import {axiosInstance} from "./axiosConfig";

export const GoogleAuthLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=Iv1.ace15a716c5abb2a		`
}

export const LoginUser = async (code) => {
    try {
        const response = await axiosInstance.post(
            "http://localhost:8080/getCode", code
        );
        return response;
    } catch (error) {
        return error.response;
    }
};