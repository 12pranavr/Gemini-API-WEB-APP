import React, { createContext, useReducer } from 'react';
import { Route ,Routes} from 'react-router-dom'


import About from './pages/About';
import Contact from './pages/Contact';
import Body from './components/Body';
import Login from './pages/Login';
import Logout from './pages/Logout'
import Home from './pages/Home';

import { initialState,reducer } from './reducer/UseReducer';


export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)


 
  return (

    <>
        <UserContext.Provider value={{state,dispatch}}>
          <Routes>
            
            <Route path='/' element={<Body />} />

            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/home' element={<Home/>}/>


            <Route path='/pages/login' element={<Login />} />
            <Route path='/pages/logout' element={<Logout />} />



          </Routes>
          </UserContext.Provider>
        
        
      
    </>
  );
}

export default App;