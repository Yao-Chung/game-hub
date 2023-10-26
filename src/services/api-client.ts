import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "44f4e62a8d8c403186bf2145cbe81b18",
    }
})