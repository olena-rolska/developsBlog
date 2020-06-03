import React from 'react';
import styled from "styled-components";
<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>


const Top = styled.header `
  max-width: 1000px;
  text-transform: uppercase;
  text-align: center;
  margin: 0px auto;
  padding: 30px;
  font-family: 'Raleway', sans-serif;
`

const Header = () => {
  return (
      <Top>  
        <header>
          <h1>Develops Blog</h1>
          <p>
            Looking for the best way to stay ahead of trends in the web design and web development industry?<br/>
            You’ve come to the right place. With our web design and web development blog, it’s easy to remain <br/> 
            up-to-date on the market, 
            plus learn new tips and tricks for web design and web development.
          </p>
        </header>
    </Top>
  )
}

export default Header;