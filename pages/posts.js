import Head from 'next/head'
import MainLayout from '../components/MainLayout'

export default function Posts() {
  return (
   <MainLayout title={'Posts'} >
    <h1>Posts page</h1>
   </MainLayout>
  )
}
// Routing
// /posts
// /posts/10