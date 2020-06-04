import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Header from '../header';
import Footer from '../footer';
import styled from 'styled-components';
import axios from 'axios';


const Body = styled.div `
  width: 100%;
  height: 100vh;
  padding: 0;
  background: radial-gradient(circle, rgba(108,85,170,1) 0%, rgba(250,250,250,0.37718837535014005) 100%);
`

const FormContainer = styled.div `
  width: 850px;
  outline: none;
  margin: 0px auto 100px;
`
const Card = styled.div `
  min-height: 300px;
  box-shadow: 5px 10px 10px #c7c4cc;
  padding: 20px;
  margin: 30px auto;
  font-family: 'Raleway', sans-serif;
  background-color: white;
`

const TitleField = styled.input `
  width: 90%;
  padding: 10px;
`

const TextArea = styled.textarea `
  width: 90%;
  padding: 10px;
  min-height: 100px;
`

const Button = styled.button `
  margin: 5px auto;
  font-size: 20px;
  background: none;
  border-bottom: 1px solid 'grey';
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  &:hover {
    color: #451c80;
    border-bottom: 2px solid grey;
    background-color: white;
  }
`



const createPost = () => {
  const [values, setValues] = React.useState({});

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };


  const postCreated = () => {
    setTimeout(() => Router.push('/'), 1500)
    alert("Post created")
  }

  const createMessage = () => {
    axios.post('https://simple-blog-api.crew.red/posts',{
    title: values.title,
    body: values.body,
  },
  )
  .then(response =>
    setValues(''),
    postCreated()
  )}

  return (
    <Body>
      <Button>
        <Link href={`/`} as={`/`}><a>←</a></Link>
      </Button>
      <Header />
      <FormContainer>
        <Card>
          <h3>CREATE A POST</h3>
          <p>Title</p>
          <TitleField
            label="Title"
            multiline
            value={values.title}
            onChange={handleChange('title')}
            autoFocus
            required
            ></TitleField>
            <p>Text</p>
            <TextArea
            label="Text"
            multiline
            value={values.body}
            onChange={handleChange('body')}
            required
            wrap="hard"
            ></TextArea>
          <Button onClick={createMessage}>
            Create ➤
          </Button>
        </Card>
      </FormContainer>
    <Footer />
  </Body>
  );
}

export default createPost;