import DetailsOrEdit from './components/DetailsOrEdit';
import CreateOrSecurity from './components/CreateOrSecurity';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cookies from './components/getCookieHelper.js'
import * as actions from './Actions/index.js';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    let cookie = cookies.getCookie("CookieKeyJWT")
    let cookieObj = cookies.getPayLoad(cookie)
    dispatch(actions.logIn(cookieObj.aud,cookie));
    
  }, [])

  return (
    <div id="App">
      <Header />
      <div id="left">
        <CreateOrSecurity />
        <Search />
      </div>
      <div id="right">
        <DetailsOrEdit />
      </div>
    </div>
  );
}

export default App;
