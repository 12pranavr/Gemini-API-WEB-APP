import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();

    return (
        <>
            <div>Logged in</div>
            <button onClick={() => navigate("/")} className='bg-red-500 text-white p-2 mt-4'>Home</button>
        </>
    );
}

export default Login;
