import Link from 'next/link'
import styles from './error.module.css'

function ErrorPage() {
  return (
    <>
    <div className={styles.error}>
     <h2>Error 404</h2>
     <p>Please <Link href={`/`}><a>Go Back</a></Link>{' '}to savety </p>
    </div> 
    </>
  )
}

export default ErrorPage
