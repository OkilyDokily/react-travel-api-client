import DetailsOrEdit from './components/DetailsOrEdit';
import CreateOrSecurity from './components/CreateOrSecurity';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cookies from './components/getCookieHelper.js'
import * as actions from './Actions/index.js';
import Header from './components/Header';
import styled from 'styled-components';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let cookie = cookies.getCookie("CookieKeyJWT")
    if (cookie) {
      let cookieObj = cookies.getPayLoad(cookie)
      dispatch(actions.logIn(cookieObj.aud, cookie));
    }
  }, []);

  const Main = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: green;
  align-items: center;
`;

  const Border = styled.div`
  border: solid 1px black;
  background-color: red;
  padding: 10px;
  margin: ${props => props.margin};
  ${props => props.marginBottom};
`;

  const Left = styled.div`
  width: 560px;
  text-align: center;
  background-color: green;
`;



  const Brown = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    width: 100%;
    background-color: brown;
    margin: 10px;
    align-self: stretch;
  `;

  return (
    <div id="App">
      <Border margin="0" marginBottom={"margin-bottom: 10px"}>
        <Header />
      </Border>
      <Main className="main">
        <Left id="left">
          <Border margin="10px">
            <CreateOrSecurity />
          </Border>
          <Border margin="10px">
            <Search />
          </Border>
        </Left>
        <Brown>
          <DetailsOrEdit />
        </Brown>
       
      </Main>
    </div>
  );
}

export default App;
