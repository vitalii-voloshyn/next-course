import Link from 'next/link'
import Head from 'next/head'

export default function Index() {
  return (
  <>
  <Head>
    <title>Home page</title>
  </Head>
  <h1>Hello Next.js</h1>
  <p><Link href={`/about`}><a>About</a></Link></p>
  <p><Link href="/posts"><a>Posts</a></Link></p>
  </>
  )
}