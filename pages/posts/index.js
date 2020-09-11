import React from "react";
import Link from "next/link";
import Typography from '@material-ui/core/Typography';



export default function Posts({ posts }) {
    return (
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
            <Typography  variant="h6" style={{color:'blue'}}  >
                <Link href="/posts/[id]" as={"/posts/" + post.id}>
                  <a>{post.title}</a>
                </Link>
                </Typography>
               
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    );
  }
  
  export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
  
    return {
      props: {
        posts,
      },
    };
  }
  