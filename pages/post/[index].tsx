import React from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Body = styled.div `
  text-align: center;
  margin: 0px auto;
  height: 100vh;
  background: radial-gradient(circle, rgba(108,85,170,1) 0%, rgba(250,250,250,0.37718837535014005) 100%);
`

const PostContainer = styled.div `
  margin: 0 auto 300px auto;
  max-width: 900px;
  text-align: left;
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

const Card = styled.div `
  max-width: 1000px;
  margin: 50px auto;
  text-align: center;
  font-family: 'Raleway', sans-serif;
`

const ContentTitle = styled.h3 `
  text-transform: uppercase;
  margin-bottom: 50px;
`
const Content = styled.p `
  margin-bottom: 50px;
`

const Post = () => {
  const [post, setPost] = React.useState({title: '', body: ''});
  const router = useRouter();
  const index = router.query.index;

  React.useEffect(() => {
    axios.get(`https://simple-blog-api.crew.red/posts/${index}`)
    .then(response => {
      setPost(response.data);
    });
  }, [index]);

    return(
      <Body>
        <Header />
        <PostContainer>
          <Button>
            <Link href="/">Main</Link>
          </Button>
          <Card>
            <ContentTitle>{post.title}</ContentTitle>
            <Content>{post.body}</Content>
          <Link href="/">Back to list</Link>
        </Card>
      </PostContainer>
      <Footer/>
    </Body>
    ) 
  }


export default Post;