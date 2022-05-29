import axios from "axios";

export default axios.create({
    baseURL:
        "https://my-shop-backend2.herokuapp.com" || "http://localhost:8000",
});
