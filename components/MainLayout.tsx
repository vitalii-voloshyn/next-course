
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
    <Head>
    <meta charSet="utf-8"/>
    <meta name="keywords" content="next,react,javascript" />
    <meta name="description" content="this is training next app" />
    <title>{title}</title>
    </Head>
      <nav>
        <Link href={`/`}><a>Home</a></Link>
        <Link href={`/about`}><a>About</a></Link>
        <Link href={`/posts`}><a>Posts</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>
      {`
      nav {
        position: fixed;
        height: 60px;
        left: 0;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        background: darkblue;  
      }
      nav a {
        color: #fff;
        margin-right: 30px;
        font-size: 20px;
        text-decoration: none;
      } 
      main {
        margin-top: 60px;
        padding-top: 50px;
      }
      `}
      </style>
    </>
  )
}

export default MainLayout

