import axios from 'axios';
import React from 'react'
import Loader from '../../../utils/loader';
import swalert from '../../../utils/swalert';
import Context from '../../../utils/context';
import { useLocation } from 'react-router-dom';

const Google = () => {

    const context = React.useContext(Context);
    const [loading, setLoading] = React.useState(false);
    const params = new URLSearchParams(location.search);
    const endpoint = import.meta.env.VITE_API;
    const location = useLocation();
    const code = params.get('code');

    const authGoogleCallback = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${endpoint}/auth/google/callback?code=${code}`);
            response.data.token = context.setToken(response.data.token);
            window.location.href = "/";
        } catch (error) {
           error.response && await swalert(error.response.data, "info", 2500);
            window.location.href = "/register";
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {authGoogleCallback();}, [])
    if (!loading) return <Loader/>

    return (
        <div>Google</div>
    )
}

export default Google;