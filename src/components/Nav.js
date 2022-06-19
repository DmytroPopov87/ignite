import React, {useState} from 'react';
//Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Image
import logo from '../img/logo.svg';
//Redux and Routes
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';


const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
    document.getElementById("clear").style.visibility = "visible";
  };

  const clearSearched = () => {
    dispatch({type: "CLEAR_SEARCHED"});
  }


  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className='search' >
        <input value={textInput} onChange={inputHandler} type="text"/>
        <button onClick={submitSearch} type="submit">Search</button>
        <button onClick={clearSearched} id="clear">Clear</button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 40%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: -moz-linear-gradient(top, #B742E8 0%, #3E6D94 100%);
    background: -webkit-linear-gradient(top, #B742E8 0%, #3E6D94 100%);
    background: linear-gradient(to bottom, #B742E8 0%, #3E6D94 100%);
    border-radius:0 36px 36px 0;
    color: white;
    margin-right: 0.2rem;
  }
  #clear {
    border-radius: 36px 36px;
    background: #DC9D4B;
    visibility: hidden;
    background: -moz-linear-gradient(top, #42E8BA 0%, #6B943E 100%);
    background: -webkit-linear-gradient(top, #42E8BA 0%, #6B943E 100%);
    background: linear-gradient(to bottom, #42E8BA 0%, #6B943E 100%);
  }
  @media (max-width: 1000px) {
    input {
      width: 60%;
      font-size: 1rem;
    }
    button {
      font-size: 1rem;
    }
  }
  @media (max-width: 670px) {
    padding: 0.5rem 0.5rem;
    input {
      width: 60%;
      font-size: 1rem;
    }
    button {
      font-size: 1rem;
    }
  }
  @media (max-width: 470px) {
    padding: 0.5rem 0.5rem;
  }
  @media (max-width: 454px) {
    #clear {
      margin: 1rem 0;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
  @media (max-width: 670px) {
    padding: 0.5rem;
  }
`;

export default Nav;