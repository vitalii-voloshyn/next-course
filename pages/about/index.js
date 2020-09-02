import {useRouter} from 'next/router'
import Head from 'next/head'
import MainLayout from '../../components/MainLayout'

export default function About() {
  const router = useRouter()
  return (
  <MainLayout>
  <Head>
    <title>About</title>
    <meta name="keywords" content="ssr, react, redux" />
    <meta charSe="utf-8" />
  </Head>
  <h1>About page</h1>
  <div>
  <button 
  style={styles.leftButton}
  onClick={() => router.push('/')} >
     Go back to home page
    </button>
  <button 
  style={styles.rightButton}
  onClick={() => router.push('/posts')}>Go to posts</button>
  </div>
  </MainLayout>
  )
}

const styles = {
  leftButton: {
    marginRight: '20px',
    padding: '5px 10px',
    borderRadius: '5px'
  },
  rightButton: {
    padding: '5px 10px',
    borderRadius: '5px'
  }
}