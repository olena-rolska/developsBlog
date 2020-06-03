import React from 'react';
import styled from "styled-components";
import Posts from "./posts";
import Header from "./header";
import Footer from "../components/Footer";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Body = styled.div `
  background: linear-gradient(left, rgba(255,255,255,1) 0%, rgba(214,242,250,1) 50%, rgba(255,255,255,1) 100%);
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