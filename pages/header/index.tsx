import React from 'react';
import styled from "styled-components";
<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>


const Top = styled.header `
  max-width: 600px;
  text-transform: uppercase;
  text-align: center;
  margin: 50px auto;
  font-family: 'Raleway', sans-serif;
  background: linear-gradient(45deg, #eaeaea 50%, #f6b300 50%);
`

const Header = () => {
  return (
      <Top>  
        <header>
          <h1>Develops Blog</h1>
          <p>just talkin'</p>
        </header>
    </Top>
  )
}

export default Header;