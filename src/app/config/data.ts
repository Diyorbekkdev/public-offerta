import axios from "axios";

export const request = axios.create({
    baseURL:"http://80.90.188.12:9000/v1/public/",
    timeout:12000
})