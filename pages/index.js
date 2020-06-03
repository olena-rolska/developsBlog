import React from 'react';
import styled from "styled-components";
import Posts from "./posts";
import Header from "./header";
import Footer from "./footer";

const Body = styled.div `
  background: radial-gradient(circle, rgba(108,85,170,1) 0%, rgba(250,250,250,0.37718837535014005) 100%);
  margin: 0;
  padding: 0;
`


function Blog(props) {
  return (
    <Body>
      <Header />
      <Posts match={props}/>
      <Footer />
    </Body>
  )
}

export default Blog;