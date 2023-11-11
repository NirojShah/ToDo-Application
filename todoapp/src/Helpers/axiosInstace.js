import axios from "axios"


let axiosInstance = axios.create({
    baseURL: "http://localhost:5000/app/v1/tasks"
})

export default axiosInstance;