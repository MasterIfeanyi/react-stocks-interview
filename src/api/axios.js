import axios from "axios"

const BASE_URL = "https://ifeanyi-stock-backend.herokuapp.com/"

export default axios.create({
    baseURL: BASE_URL
});
