import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import styled from "styled-components";

const BodyPosts = styled.div `
  text-align: center;
  margin: 0px auto;
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

const Container = styled.div `
  margin: 24px;
  min-height: calc(96vh - 341px);
  box-sizing: border-box;
  padding: 8px;
`

const Card = styled.div `
  max-width: 1000px;
  min-height: 200px;
  box-shadow: 5px 10px 10px #c7c4cc;
  padding: 20px;
  position: relative;
  margin: 30px auto;
  background-color: white;
  &:hover {
    background-color: #aa99c7;
  }
`

const Content = styled.p `
  margin-bottom: 20px;
  font-family: 'Raleway', sans-serif;
`

const ContentButton = styled.button `
  margin: 5px 0px auto;
  position: absolute;
  right: 0;
  bottom: 2px;
  font-size: 16px;
  background: none;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: underline;
  display: inline-block;
  &:hover {
    color: #451c80;
    font-size: 17px;
  }
`

const Posts: React.FC = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://simple-blog-api.crew.red/posts`)
      .then(response => {
        setPosts(response.data);
      });
  }, []);

  return (
    <BodyPosts>
      <Button>
        <Link href={`/create/`} as={`/posts/new`}><p>CREATE A POST</p></Link>
      </Button>
      <Container>{posts.slice(0, 40).reverse().map(post =>
        <div>
          <Card>
            <div>
              <Content key="post.id">{post.title}</Content>
              <Content key="post.id">{post.body}</Content>
            </div>
            <ContentButton>
              <Link href="/post/[index]" as={`post/${post.id}`} passHref><a>Details</a></Link>
            </ContentButton>
          </Card>
        </div>
      )}
      </Container>
    </BodyPosts>
  );   
}

export default Posts;