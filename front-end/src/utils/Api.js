import axios from "axios";
export const sendRequest = async(url, method, data, token) => {
    const request_url = "http://localhost:3000/" + url;
    const response = await axios({
        url:request_url,
        method,
        headers:{
            'Authorization': `Bearer${token}`,
            "Content-type" : "application/json",
        },
        data,
    });
    return response
};