import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import MainLayout from '../../components/MainLayout'
import styles from './id.module.css'

export default function Post({post: serverPost}) {
  const {query} = useRouter()
  const [post, setPost] = useState(serverPost)
  useEffect(() => {
   async function load() {
     const response = await fetch(`http://localhost:4200/posts/${query.id}`)
     const data = await response.json()
     setPost(data)
   }
   if (!serverPost) {
     load()
   }
  }, [])

if (!post) {
  return (
    <MainLayout>
      <p>Loading ...</p>
    </MainLayout>
  )
}
  return (
    <MainLayout title={'Post'} >
    <div className={styles.post}>
      <h1>
        {post.title}
      </h1>
      <hr />
      <p>{post.body}</p>
      <Link href={`/posts`}><a>Go back to posts</a></Link>
    </div>
    </MainLayout>
  )
}


Post.getInitialProps = async ({query, req}) => {
  if (!req) {
    return {post: null}
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`)
  const post = await response.json()
  return {
    post
 }
}
      
      // refactoring:
      // Отрабатывает только на сервере
      // export  async function getServerSideProps({query, req}) {
      //   const response = await fetch(`http://localhost:4200/posts/${query.id}`)
      //   const post = await response.json()
      //   return {
      //     props: {post}
      //   }
      // }
      