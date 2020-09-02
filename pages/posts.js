import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'

export default function Posts({posts: serverPosts}) { 
   const [posts, setPosts] = useState(serverPosts)

   useEffect(() => {
     async function load() {
       const response = await fetch('http://localhost:4200/posts')
       const data = await response.json()
       setPosts(data)
     }
     if (!serverPosts) {
        load()
     }
   })

   if (!posts) {
    return (
      <MainLayout>
        <p>Loading ...</p>
      </MainLayout>
    )
  }
// =============================
  // useEffect(() => {
  //   async function load() {
  //    const response = await fetch(`http://localhost:4200/posts`)
  //    const data = await response.json()
  //    setPosts(data)
  //   }
  //   load()
  // }, [])
  // в SSR асинхронное получение данных не индексируется роботами, так как данные не отрисовуются сразу. 
//===================================
  return (
   <MainLayout title={'Posts'} >
    <h1>Posts page</h1>
  
    <ul>
      {posts.map(post => (
        <li key={post.id}>
        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
         <a>{post.title}</a>
        </Link>
        </li>
      ))}
    </ul>
   </MainLayout>
  )
}
// Определяем статический метод который будет выполнятся на сервере getInitialProps встроеная функция в Next
Posts.getInitialProps = async ({req}) => {
  if (!req) {
    return {
      posts: null
    }
  }
  const response = await fetch(`http://localhost:4200/posts`)
  const posts = await response.json()
  return {
    posts
  }
}


// Routing
// /posts
// /posts/10