import React from "react";
import { useRouter } from "next/router";

export default function Post({ postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading Page Data...</div>;
  }
  return (
    <div>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </div>
  );
}
export async function getStaticPaths() {
    const paths = ["/posts/1", "/posts/2"];
    return { paths, fallback: true };
  }
  
  export async function getStaticProps({ query, params }) {
    const { id } = query || params;
  
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    const postData = await res.json();
  
    return {
      props: {
        postData,
      },
    };
  }