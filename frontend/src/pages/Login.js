import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';




function Login() {
    const {state,dispatch} = useContext(UserContext);

    return (
        <>
            <div >Logged in</div>

            <button onClick={dispatch({type:"USER" , payload:true})} className='bg-red-500 text-white p-2 mt-4'>Home</button>
        </>
    );
}

export default Login;
