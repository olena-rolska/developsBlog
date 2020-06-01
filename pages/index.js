import React from 'react';
import axios from 'axios';
import Posts from "../components/Posts";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Blog() {
  return (
    <div>
      <Header />
      <Posts />
      <Footer />
    </div>
  )
}

export default Blog;