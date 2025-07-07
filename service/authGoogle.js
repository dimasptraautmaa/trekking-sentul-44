import axios from "axios";

const authGoogle = async () => {
    try {
        const endpoint = import.meta.env.VITE_API;
        const response = await axios.get(`${endpoint}/auth/google`);
        window.location.href = response.data;
    } catch (error) {
        return false;
    }
}

export default authGoogle;