import React from 'react';
import Posts from "./posts";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Blog(props) {
  return (
    <div>
      <Header />
      <Posts match={props}/>
      <Footer />
    </div>
  )
}

export default Blog;