import React from 'react';
import styled from "styled-components"


const FooterContainer = styled.footer `
  font-family: 'Raleway', sans-serif;
  text-align: center;
  margin: 5px auto;
`

const FooterBlock = styled.ul `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  max-width: 500px;
  margin: 5px auto;
`

const FooterItem = styled.li `
  
`

const Button = styled.a `
  margin: 5px auto;
  font-size: 16px;
  background: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  &:hover {
    color: #451c80;
    background-color: #e8e4f0;
    border-radius: 10px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <h2>Follow us</h2>
      <FooterBlock>
          <FooterItem>
            <Button>Facebook</Button>
          </FooterItem>
          <FooterItem>
            <Button>Instagram</Button>
          </FooterItem>
          <FooterItem>
            <Button>Twitter</Button>
          </FooterItem>
        </FooterBlock>
    </FooterContainer>
  )
}

export default Footer;